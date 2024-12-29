<?php

namespace Cadus\repositories\impl\mariadb;

use Cadus\models\entities\MemberEntity;
use Cadus\repositories\AbstractRepository;
use Cadus\repositories\IMemberRepository;

class MariaDBMemberRepository extends AbstractRepository implements IMemberRepository
{

    /**
     * @param MemberEntity $member
     * @return void
     * @throws \PDOException
     */
    public function registerMember(MemberEntity $member): void
    {
        $statement = $this->pdo->prepare("INSERT INTO MEMBERS (login, password, created_at) VALUES (:login, :password, NOW())");
        $statement->bindValue(":login", $member->getLogin());
        $statement->bindValue(":password", password_hash($member->getPassword(), PASSWORD_DEFAULT));
        $statement->execute();
    }

    public function memberExists(MemberEntity $member) : bool
    {
        $statement = $this->pdo->prepare("SELECT * FROM MEMBERS WHERE login = :login");
        $statement->bindValue(":login", $member->getLogin());
        $statement->execute();

        return $statement->rowCount() > 0;
    }

    public function credentialsMatch(MemberEntity $creds) : bool
    {
        $statement = $this->pdo->prepare("SELECT * FROM MEMBERS WHERE login = :login");
        $statement->bindValue(":login", $creds->getLogin());
        $statement->execute();

        $member = $statement->fetch();

        return $member && password_verify($creds->getPassword(), $member['password']);
    }

    public function isAdministrator()
    {
        // TODO: Implement isAdministrator() method.
    }
}