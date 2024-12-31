<?php

namespace Cadus\models\dto;

class AnswerDto
{
    private string $question;

    private string $answer;

    public function __construct(string $question, string $answer) {
        $this->question = $question;
        $this->answer = $answer;
    }

    public function getQuestion(): string
    {
        return $this->question;
    }

    public function getAnswer(): string
    {
        return $this->answer;
    }
}