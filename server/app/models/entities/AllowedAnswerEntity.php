<?php

namespace Cadus\models\entities;

/**
 * Class AllowedAnswerEntity
 *
 * Represents an allowed answer entity corresponding to the database model for allowed answers.
 * This object encapsulates the information about a particular answer to a question, including
 * the answer's ID, the associated question's ID, and the text of the answer. It is a direct representation
 * of the 'allowed_answer' table in the database.
 */
class AllowedAnswerEntity
{
    /**
     * @var int The ID of the answer.
     * Corresponds to the 'allowed_answer_id' field in the database table.
     */
    private int $answerId;

    /**
     * @var int The ID of the associated question.
     * Corresponds to the 'question_id' field in the database table.
     */
    private int $questionId;

    /**
     * @var string The text of the answer.
     * Corresponds to the 'question_text' field in the database table.
     */
    private string $text;

    /**
     * Constructor.
     *
     * Initializes the allowed answer entity with the provided values, representing a row from the
     * allowed answers database table.
     *
     * @param int $answerId The ID of the answer.
     * @param int $questionId The ID of the associated question.
     * @param string $text The text of the answer.
     */
    public function __construct(int $answerId, int $questionId, string $text) {
        $this->answerId = $answerId;
        $this->questionId = $questionId;
        $this->text = $text;
    }

    /**
     * Gets the ID of the answer.
     *
     * @return int The answer's ID, corresponding to the 'allowed_answer_id' field in the database.
     */
    public function getAnswerId(): int
    {
        return $this->answerId;
    }

    /**
     * Gets the ID of the associated question.
     *
     * @return int The question's ID, corresponding to the 'question_id' field in the database.
     */
    public function getQuestionId(): int
    {
        return $this->questionId;
    }

    /**
     * Gets the text of the answer.
     *
     * @return string The text of the answer, corresponding to the 'answer_text' field in the database.
     */
    public function getText(): string
    {
        return $this->text;
    }
}