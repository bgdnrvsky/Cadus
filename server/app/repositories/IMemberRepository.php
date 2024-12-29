<?php

namespace Cadus\repositories;


use Cadus\models\entities\MemberEntity;

interface IMemberRepository {
    public function registerMember(MemberEntity $member);

    public function memberExists(MemberEntity $member) : bool;

    public function credentialsMatch(MemberEntity $creds) : bool;

    public function isAdministrator(/* */);
}