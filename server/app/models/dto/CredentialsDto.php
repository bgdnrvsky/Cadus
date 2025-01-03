<?php

namespace Cadus\models\dto;

/**
 * Class CredentialsDto
 *
 * A Data Transfer Object (DTO) class that represents the credentials required for user authentication.
 * This object is used to encapsulate the login and password information.
 */
class CredentialsDto
{
    /**
     * @var string The login (email) for authentication.
     */
    private string $login;

    /**
     * @var string The password associated with the login.
     */
    private string $password;

    /**
     * Constructor.
     *
     * @param string $login The login (email) for authentication.
     * @param string $password The password for authentication.
     */
    public function __construct(string $login, string $password) {
        $this->login = $login;
        $this->password = $password;
    }

    /**
     * Gets the login (email).
     *
     * @return string The login for authentication.
     */
    public function getLogin(): string
    {
        return $this->login;
    }

    /**
     * Gets the password associated with the login.
     *
     * @return string The password.
     */
    public function getPassword(): string
    {
        return $this->password;
    }
}