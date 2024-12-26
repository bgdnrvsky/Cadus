<?php

namespace Cadus\models;

use Cadus\models\dto\MemberDto;
use Cadus\models\entities\MemberEntity;

class MemberMapper
{
    public static function mapToEntity(MemberDto $memberDto): MemberEntity {
        return new MemberEntity(
            $memberDto->getLogin(),
            $memberDto->getPassword()
        );
    }
}