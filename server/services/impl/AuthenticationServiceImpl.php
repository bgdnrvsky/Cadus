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

    public function register(MemberEntity $member)
    {
        // 1. Verify if the user does not already exist
        if ($this->memberRepository->memberExists($member)) {

        }

        // 2. Delegate saving the user into the database
        $this->memberRepository->registerMember($member);
    }
}