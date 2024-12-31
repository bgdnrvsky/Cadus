<?php

namespace Cadus\models\dto;

class RegisterDto
{
    private string $login;
    private string $password;

    private string $passwordConfirm;

    private bool $acceptTerms;

    public function __construct(string $login, string $password, string $passwordConfirm, bool $acceptTerms) {
        $this->login = $login;
        $this->password = $password;
        $this->passwordConfirm = $passwordConfirm;
        $this->acceptTerms = $acceptTerms;
    }

    public function getLogin(): string
    {
        return $this->login;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function getPasswordConfirm(): string
    {
        return $this->passwordConfirm;
    }

    public function getAcceptTerms(): bool
    {
        return $this->acceptTerms;
    }
}