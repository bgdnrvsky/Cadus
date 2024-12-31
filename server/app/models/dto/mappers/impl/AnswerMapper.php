<?php

namespace Cadus\models\dto\mappers\impl;

use Cadus\models\dto\AnswerDto;

class AnswerMapper extends AbstractArrayDtoMapper
{
    protected function expectedKeys(): array
    {
        return [
            "question",
            "answer"
        ];
    }

    protected function buildDto(array $data): AnswerDto
    {
        return new AnswerDto(
            $data["question"],
            $data["answer"]
        );
    }
}