<?php

namespace Cadus\services;

use Cadus\models\dto\CredentialsDto;
use Cadus\models\entities\MemberEntity;

interface IAuthenticationService {
    public function register(CredentialsDto $memberCreds) : void;

    public function login(CredentialsDto $creds) : MemberEntity;

    public function logout() : void;
}