<?php

namespace Cadus\models\dto;

/**
 * Class AnswerDto
 *
 * A Data Transfer Object (DTO) class that represents an answer to a question.
 * This object is used to encapsulate the data related to a specific question and its corresponding answer.
 */
class AnswerDto
{
    /**
     * @var string The question related to the answer.
     */
    private string $question;

    /**
     * @var string The answer to the question.
     */
    private string $answer;

    /**
     * Constructor.
     *
     * @param string $question The question related to the answer.
     * @param string $answer The answer to the question.
     */
    public function __construct(string $question, string $answer) {
        $this->question = $question;
        $this->answer = $answer;
    }

    /**
     * Gets the question associated with this answer.
     *
     * @return string The question.
     */
    public function getQuestion(): string
    {
        return $this->question;
    }

    /**
     * Gets the answer to the question.
     *
     * @return string The answer.
     */
    public function getAnswer(): string
    {
        return $this->answer;
    }
}