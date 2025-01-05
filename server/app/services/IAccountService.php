<?php

namespace Cadus\services;

use Cadus\models\entities\MemberEntity;

interface IAccountService
{
    public function deleteAccount(MemberEntity $member): void;
}