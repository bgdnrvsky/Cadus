<?php

namespace Cadus\models\dto\mappers\impl;

use Cadus\models\dto\DeleteCommentDto;

class DeleteCommentMapper extends AbstractArrayDtoMapper
{

    /**
     * @inheritDoc
     */
    protected function expectedKeys(): array
    {
        return [
          "comment-id"
        ];
    }

    /**
     * @inheritDoc
     */
    protected function buildDto(array $data): DeleteCommentDto
    {
        return new DeleteCommentDto(
            $data["comment-id"]
        );
    }
}