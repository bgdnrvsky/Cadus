<?php

namespace Cadus\services;

use Cadus\models\dto\mappers\AccountUpdateDto;
use Cadus\models\entities\MemberEntity;

interface IAccountService
{
    public function updateAccount(MemberEntity $member, AccountUpdateDto $update): MemberEntity;

    public function deleteAccount(MemberEntity $member): void;
}