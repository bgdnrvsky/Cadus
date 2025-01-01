<?php

namespace Cadus\services\impl;

use Cadus\exceptions\InvalidCredentialsException;
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

    public function register(CredentialsDto $memberCreds): void {
        if ($this->memberRepository->memberExists($memberCreds->getLogin())) {
            throw new \Exception("Member already exists", 409);
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
}