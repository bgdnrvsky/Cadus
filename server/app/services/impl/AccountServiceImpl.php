<?php

namespace Cadus\services\impl;

use Cadus\models\entities\MemberEntity;
use Cadus\repositories\IMemberRepository;
use Cadus\services\IAccountService;

class AccountServiceImpl implements IAccountService
{
    private IMemberRepository $memberRepository;

    public function __construct(IMemberRepository $memberRepository) {
        $this->memberRepository = $memberRepository;
    }

    public function deleteAccount(MemberEntity $member): void
    {
        $this->memberRepository->deleteMember($member);

        // Destroy the SESSION
        unset($_SESSION['authenticated_member']);
        session_unset();
        session_destroy();
    }
}