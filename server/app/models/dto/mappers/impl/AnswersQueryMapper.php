<?php

namespace Cadus\models\dto\mappers\impl;

use Cadus\models\dto\AnswersQueryDto;
use Cadus\models\dto\mappers\IArrayDtoMapper;

class AnswersQueryMapper extends AbstractArrayDtoMapper implements IArrayDtoMapper
{
    protected function expectedKeys(): array
    {
        return [
            "question-id"
        ];
    }

    protected function buildDto(array $data): AnswersQueryDto
    {
        return new AnswersQueryDto(
            $data["question-id"],
        );
    }
}