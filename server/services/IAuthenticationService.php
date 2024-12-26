<?php

namespace Cadus\services;

use Cadus\models\entities\MemberEntity;

interface IAuthenticationService
{
    public function register(MemberEntity $member);
}