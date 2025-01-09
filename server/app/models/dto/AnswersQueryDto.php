<?php

namespace Cadus\models\dto;

class AnswersQueryDto
{
    private int $questionId;

    public function __construct(int $questionId) {
        $this->questionId = $questionId;
    }

    public function getQuestionId(): int {
        return $this->questionId;
    }
}