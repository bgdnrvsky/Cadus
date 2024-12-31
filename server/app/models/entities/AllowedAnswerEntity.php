<?php

namespace Cadus\models\entities;

class AllowedAnswerEntity
{
    private int $answerId;

    private int $questionId;

    private string $text;

    public function __construct(int $answerId, int $questionId, string $text) {
        $this->answerId = $answerId;
        $this->questionId = $questionId;
        $this->text = $text;
    }

    public function getAnswerId(): string
    {
        return $this->answerId;
    }

    public function getQuestionId(): string
    {
        return $this->questionId;
    }

    public function getText(): string
    {
        return $this->text;
    }
}