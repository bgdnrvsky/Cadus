<?php

namespace Cadus\models\dto\mappers\impl;

use Cadus\models\dto\mappers\AccountUpdateDto;

class AccountUpdateMapper extends AbstractArrayDtoMapper
{

    /**
     * @inheritDoc
     */
    protected function expectedKeys(): array
    {
        return [
            "new-email",
            "old-password",
            "new-password",
        ];
    }

    /**
     * @inheritDoc
     */
    protected function buildDto(array $data): AccountUpdateDto
    {
        return new AccountUpdateDto(
            $data["new-email"],
            $data["old-password"],
            $data["new-password"]
        );
    }
}