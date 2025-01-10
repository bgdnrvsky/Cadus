<?php

namespace Cadus\models\dto;

class DeleteCommentDto
{
    private int $commentId;

    public function __construct(int $commentId) {
        $this->commentId = $commentId;
    }

    public function getCommentId(): int {
        return $this->commentId;
    }
}