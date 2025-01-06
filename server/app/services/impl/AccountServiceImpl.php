<?php

namespace Cadus\services\impl;

use Cadus\models\dto\mappers\AccountUpdateDto;
use Cadus\models\entities\MemberEntity;
use Cadus\repositories\IMemberRepository;
use Cadus\services\IAccountService;
use Exception;

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

    public function updateAccount(MemberEntity $member, AccountUpdateDto $update): MemberEntity
    {
        // Verify old password is correct
        if (!password_verify($update->getOldPassword(), $member->getPassword())) {
            throw new Exception("Current password is incorrect");
        }

        // Update password
        if ($update->getOldPassword() !== $update->getNewPassword()) {
            $member = $this->memberRepository->updatePassword($member->getId(), $update->getNewPassword());
        }

        // Update e-mail
        if ($member->getLogin() !== $update->getEmail()) {
            $member = $this->memberRepository->updateLogin($member->getId(), $update->getEmail());
        }

        // Update authenticated member's data
        $_SESSION['authenticated_member'] = $member;

        return $member;
    }
}