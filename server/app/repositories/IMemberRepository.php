<?php

namespace Cadus\repositories;


use Cadus\models\entities\MemberEntity;

interface IMemberRepository {
    public function registerMember(string $email, string $password);

    public function memberExists(string $email) : bool;

    public function findMemberByEmail(string $email) : ?MemberEntity;

    public function isAdministrator(/* */);
}