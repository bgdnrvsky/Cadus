<?php

namespace Cadus\services\impl;

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
    public function register(MemberEntity $member): void {
        // 1. Verify if the user already exists
        if ($this->memberRepository->memberExists($member)) {
            throw new \Exception("Member already exists");
        }

        // 2. Delegate saving the user into the database
        $this->memberRepository->registerMember($member);
    }

    public function login(MemberEntity $member) {
        return $this->memberRepository->credentialsMatch($member);
    }
}