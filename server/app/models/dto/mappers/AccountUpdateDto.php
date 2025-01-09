<?php

namespace Cadus\models\dto\mappers;

class AccountUpdateDto
{
    private string $email;

    private string $oldPassword;

    private string $newPassword;

    public function __construct(string $email, string $oldPassword, string $newPassword) {
        $this->email = $email;
        $this->oldPassword = $oldPassword;
        $this->newPassword = $newPassword;
    }

    public function getEmail(): string {
        return $this->email;
    }

    public function getOldPassword(): string {
        return $this->oldPassword;
    }

    public function getNewPassword(): string {
        return $this->newPassword;
    }
}