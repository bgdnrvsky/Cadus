<?php

namespace Cadus\repositories\impl\mariadb;

use Cadus\models\entities\MemberEntity;
use Cadus\repositories\AbstractRepository;
use Cadus\repositories\ICommentRepository;

class MariaDBCommentRepository extends AbstractRepository implements ICommentRepository
{
    public function save(MemberEntity $member, string $text): void
    {
        $statement = $this->pdo->prepare(
            "INSERT INTO COMMENT(member_id, comment_text) VALUES (:member_id, :text)"
        );

        $statement->bindValue(':text', $text);
        $statement->bindValue(':member_id', $member->getId());
        $statement->execute();
    }

    public function getAll(): array
    {
        $statement = $this->pdo->query(
            "SELECT comment_text AS commentText, login AS authorLogin
             FROM COMMENT c, MEMBERS m
             WHERE c.member_id = m.member_id"
        );

        $statement->execute();

        return $statement->fetchAll();
    }
}