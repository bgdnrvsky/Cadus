<?php

namespace Cadus\models\dto\mappers\impl;

use Cadus\models\dto\CredentialsDto;

class LoginMapper extends AbstractArrayDtoMapper
{

    protected function expectedKeys(): array
    {
        return [
            'login-email',
            'login-password',
        ];
    }

    protected function buildDto(array $data): CredentialsDto
    {
        return new CredentialsDto(
            $data['login-email'],
            $data['login-password'],
        );
    }
}