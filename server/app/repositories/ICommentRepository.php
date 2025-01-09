<?php

namespace Cadus\repositories;

use Cadus\models\entities\MemberEntity;

interface ICommentRepository
{
    public function save(MemberEntity $member, string $text) : void;

    public function getAll() : array;
}