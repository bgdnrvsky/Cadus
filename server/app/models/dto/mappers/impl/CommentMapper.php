<?php

namespace Cadus\models\dto\mappers\impl;

use Cadus\models\dto\CommentDto;

class CommentMapper extends AbstractArrayDtoMapper
{

    /**
     * @inheritDoc
     */
    protected function expectedKeys(): array
    {
        return [
            "comment-text"
        ];
    }

    /**
     * @inheritDoc
     */
    protected function buildDto(array $data): CommentDto
    {
        return new CommentDto(
            $data["comment-text"]
        );
    }
}