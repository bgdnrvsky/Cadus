<?php

namespace Cadus\services\impl;

use Cadus\exceptions\InvalidCredentialsException;
use Cadus\models\dto\CredentialsDto;
use Cadus\models\entities\MemberEntity;
use Cadus\repositories\IMemberRepository;
use Cadus\services\IAuthenticationService;
use Exception;

/**
 * AuthenticationServiceImpl is an implementation of the IAuthenticationService interface.
 * It handles the business logic related to user authentication, including user registration and login.
 * This service interacts with the member repository to register users and validate credentials during login.
 */
class AuthenticationServiceImpl implements IAuthenticationService
{
    /**
     * @var IMemberRepository The repository for managing member-related data operations.
     */
    private IMemberRepository $memberRepository;

    /**
     * Constructor to initialize AuthenticationServiceImpl with an instance of IMemberRepository.
     *
     * @param IMemberRepository $memberRepository The repository for fetching and saving member data.
     */
    public function __construct(IMemberRepository $memberRepository) {
        $this->memberRepository = $memberRepository;
    }

    public function register(CredentialsDto $memberCreds): void {
        if ($this->memberRepository->memberExists($memberCreds->getLogin())) {
            throw new Exception("Member already exists", 409);
        }

        $this->memberRepository->registerMember(
            $memberCreds->getLogin(),
            $memberCreds->getPassword()
        );
    }

    public function login(CredentialsDto $creds): MemberEntity {
        $member = $this->memberRepository->findMemberByEmail($creds->getLogin());

        if (!$member || !password_verify($creds->getPassword(), $member->getPassword())) {
            throw new InvalidCredentialsException();
        }

        session_start();
        $_SESSION['authenticated_member'] = $member;
        return $member;
    }

    public function logout(): void {
        session_start();

        if (!isset($_SESSION['authenticated_member'])) {
            throw new Exception("Cannot log out because member is not authenticated", 401);
        }

        unset($_SESSION['authenticated_member']);
        session_unset();
        session_destroy();
    }

    public function isAdmin(MemberEntity $member): bool
    {
        return $this->memberRepository->isAdministrator($member);
    }
}