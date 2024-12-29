<?php

namespace Cadus\services\impl;

use Cadus\models\dto\CredentialsDto;
use Cadus\models\entities\MemberEntity;
use Cadus\repositories\IMemberRepository;
use Cadus\services\IAuthenticationService;

class AuthenticationServiceImpl implements IAuthenticationService
{
    private IMemberRepository $memberRepository;

    public function __construct(IMemberRepository $memberRepository) {
        $this->memberRepository = $memberRepository;
    }

    /**
     * @throws \Exception when the member already exists
     */
    public function register(CredentialsDto $memberCreds): void {
        // 1. Verify if the user already exists
        if ($this->memberRepository->memberExists($memberCreds->getLogin())) {
            throw new \Exception("Member already exists");
        }

        // 2. Delegate saving the user into the database
        $this->memberRepository->registerMember(
            $memberCreds->getLogin(),
            $memberCreds->getPassword()
        );
    }

    public function login(CredentialsDto $creds): ?MemberEntity {
        $member = $this->memberRepository->findMemberByEmail($creds->getLogin());

        if (!$member || !password_verify($creds->getPassword(), $member->getPassword())) {
            return null;
        }

        session_start();
        $_SESSION['user'] = $creds->getLogin();
        return $member;
    }
}