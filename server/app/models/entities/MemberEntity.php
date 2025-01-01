<?php

namespace Cadus\models\entities;

/**
 * Class MemberEntity
 *
 * Represents a member entity corresponding to the database model for members.
 * This object encapsulates the data related to a user (member), including the user's ID, login, password,
 * and the account creation date. It is a direct representation of the 'members' table in the database.
 */
class MemberEntity
{
    /**
     * @var int The ID of the member.
     * Corresponds to the 'member_id' field in the members database table.
     */
    private int $id;

    /**
     * @var string The login (email) of the member.
     * Corresponds to the 'login' field in the members database table.
     */
    private string $login;

    /**
     * @var string The password of the member.
     * Corresponds to the 'password' field in the members database table.
     */
    private string $password;

    /**
     * @var string The date the member account was created.
     * Corresponds to the 'created_at' field in the members database table.
     */
    private string $dateCreated;

    /**
     * Constructor.
     *
     * Initializes the member entity with the provided values, representing a row from the
     * members database table.
     *
     * @param int $id The ID of the member.
     * @param string $login The login (email) of the member.
     * @param string $password The password of the member.
     * @param string $dateCreated The account creation date of the member.
     */
    public function __construct(int $id, string $login, string $password, string $dateCreated) {
        $this->id = $id;
        $this->login = $login;
        $this->password = $password;
        $this->dateCreated = $dateCreated;
    }

    /**
     * Gets the ID of the member.
     *
     * @return int The member's ID, corresponding to the 'member_id' field in the database.
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * Gets the login (email) of the member.
     *
     * @return string The member's login, corresponding to the 'login' field in the database.
     */
    public function getLogin(): string
    {
        return $this->login;
    }

    /**
     * Gets the password of the member.
     *
     * @return string The member's password, corresponding to the 'password' field in the database.
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * Gets the account creation date of the member.
     *
     * @return string The date the member account was created, corresponding to the 'created_at' field in the database.
     */
    public function getDateCreated(): string
    {
        return $this->dateCreated;
    }
}