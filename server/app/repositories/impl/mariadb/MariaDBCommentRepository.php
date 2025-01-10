<?php

namespace Cadus\repositories\impl\mariadb;

use Cadus\models\entities\MemberEntity;
use Cadus\repositories\AbstractRepository;
use Cadus\repositories\ICommentRepository;

class MariaDBCommentRepository extends AbstractRepository implements ICommentRepository
{
    public function save(MemberEntity $member, string $text): int
    {
        $statement = $this->pdo->prepare(
            "INSERT INTO COMMENT(member_id, comment_text) VALUES (:member_id, :text)"
        );

        $statement->bindValue(':text', $text);
        $statement->bindValue(':member_id', $member->getId());
        $statement->execute();

        return $this->pdo->lastInsertId();
    }

    public function getAll(): array
    {
        $statement = $this->pdo->query(
            "SELECT comment_id AS commentId, comment_text AS commentText, login AS authorLogin
             FROM COMMENT c, MEMBERS m
             WHERE c.member_id = m.member_id"
        );

        $statement->execute();

        return $statement->fetchAll();
    }

    public function getAllByMember(MemberEntity $member): array
    {
        $statement = $this->pdo->prepare(
            "SELECT comment_id AS commentId, comment_text AS commentText, login AS authorLogin
            FROM COMMENT c, MEMBERS m
            WHERE c.member_id = m.member_id AND m.member_id = :member_id"
        );

        $statement->bindValue(':member_id', $member->getId());
        $statement->execute();

        return $statement->fetchAll();
    }

    public function deleteCommentById(int $commentId): void
    {
        $statement = $this->pdo->prepare("DELETE FROM COMMENT WHERE comment_id = :commentId");
        $statement->bindValue(':commentId', $commentId);
        $statement->execute();
    }
}