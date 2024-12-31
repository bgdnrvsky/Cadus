<?php

namespace Cadus\models\dto\mappers\impl;

use Cadus\models\dto\RegisterDto;

class RegisterMapper extends AbstractArrayDtoMapper
{
    protected function expectedKeys(): array
    {
        return [
            'register-email',
            'register-password',
            'register-password-confirm',
            'accept-terms',
        ];
    }

    protected function buildDto(array $data): RegisterDto
    {
        return new RegisterDto(
            $data['register-email'],
            $data['register-password'],
            $data['register-password-confirm'],
            $data['accept-terms'],
        );
    }
}