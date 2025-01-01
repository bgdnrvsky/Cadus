<?php

namespace Cadus\repositories\impl\mariadb;

use Cadus\models\entities\MemberEntity;
use Cadus\repositories\AbstractRepository;
use Cadus\repositories\IMemberRepository;
use PDO;

/**
 * Class MariaDBMemberRepository
 *
 * Implementation of the IMemberRepository interface for interacting with the database using MariaDB.
 * This class provides methods for managing members in the system, including registration, checking
 * if a member exists, retrieving a member by email, and verifying if a member is an administrator.
 * It utilizes PDO for database operations and extends the AbstractRepository class to get access
 * to the shared PDO connection.
 */
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

    public function isAdministrator(MemberEntity $member): bool
    {
        $statement = $this->pdo->prepare(
            "SELECT EXISTS(
                SELECT 1
                FROM ADMINISTRATORS
                WHERE member_id = :member_id
            ) AS id_admin"
        );

        $statement->bindValue(":member_id", $member->getId(), PDO::PARAM_INT);
        $statement->execute();

        $row = $statement->fetch();

        return $row['id_admin'];
    }
}