<?php

namespace Cadus\repositories\impl\mariadb;

use Cadus\models\entities\MemberEntity;
use Cadus\repositories\AbstractRepository;
use Cadus\repositories\IMemberRepository;

class MariaDBMemberRepository extends AbstractRepository implements IMemberRepository
{
    public function registerMember(string $email, string $password): void
    {
        $statement = $this->pdo->prepare("INSERT INTO MEMBERS (login, password, created_at) VALUES (:login, :password, NOW())");
        $statement->bindValue(":login", $email);
        $statement->bindValue(":password", password_hash($password, PASSWORD_DEFAULT));
        $statement->execute();
    }

    public function memberExists(string $email) : bool
    {
        return $this->findMemberByEmail($email) != null;
    }

    public function findMemberByEmail(string $email): ?MemberEntity {
        $statement = $this->pdo->prepare("SELECT * FROM MEMBERS WHERE login = :login");
        $statement->bindValue(":login", $email);
        $statement->execute();
        $member = $statement->fetch();

        if (!$member) {
            return null;
        }

        return new MemberEntity(
            $member['member_id'],
            $member['login'],
            $member['password'],
            $member['created_at']
        );
    }

    public function isAdministrator()
    {
        // TODO: Implement isAdministrator() method.
    }
}