<?php

namespace Cadus\models\dto;

/**
 * Class RegisterDto
 *
 * A Data Transfer Object (DTO) class that represents the registration details of a user.
 * This object is used to encapsulate the login, password, password confirmation, and terms acceptance information
 * during user registration.
 */
class RegisterDto
{
    /**
     * @var string The login (email) for the user.
     */
    private string $login;

    /**
     * @var string The password chosen by the user.
     */
    private string $password;

    /**
     * @var string The password confirmation to ensure the passwords match.
     */
    private string $passwordConfirm;

    /**
     * @var bool Indicates whether the user has accepted the terms and conditions.
     */
    private bool $acceptTerms;

    /**
     * Constructor.
     *
     * @param string $login The login (email) for the user.
     * @param string $password The password chosen by the user.
     * @param string $passwordConfirm The password confirmation to ensure both passwords match.
     * @param bool $acceptTerms Whether the user has accepted the terms and conditions.
     */
    public function __construct(string $login, string $password, string $passwordConfirm, bool $acceptTerms) {
        $this->login = $login;
        $this->password = $password;
        $this->passwordConfirm = $passwordConfirm;
        $this->acceptTerms = $acceptTerms;
    }

    /**
     * Gets the login (email) for the user.
     *
     * @return string The login.
     */
    public function getLogin(): string
    {
        return $this->login;
    }

    /**
     * Gets the password chosen by the user.
     *
     * @return string The password.
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * Gets the password confirmation to ensure the passwords match.
     *
     * @return string The password confirmation.
     */
    public function getPasswordConfirm(): string
    {
        return $this->passwordConfirm;
    }

    /**
     * Gets whether the user has accepted the terms and conditions.
     *
     * @return bool True if the user has accepted the terms, false otherwise.
     */
    public function getAcceptTerms(): bool
    {
        return $this->acceptTerms;
    }
}