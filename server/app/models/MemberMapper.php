<?php

namespace Cadus\models;

use Cadus\models\dto\CredentialsDto;
use Cadus\models\entities\MemberEntity;

class MemberMapper
{
    public static function mapToEntity(CredentialsDto $memberDto): MemberEntity {
        return new MemberEntity(
            $memberDto->getLogin(),
            $memberDto->getPassword()
        );
    }
}