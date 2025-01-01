<?php

namespace Cadus\models\entities;

/**
 * Class QuestionEntity
 *
 * Represents a question entity corresponding to the database model for questions.
 * This object encapsulates the data related to a question, including its ID and text.
 * It is a direct representation of the 'question' table in the database.
 */
class QuestionEntity
{
    /**
     * @var int The ID of the question.
     * Corresponds to the 'question_id' field in the question database table.
     */
    private int $id;

    /**
     * @var string The text of the question.
     * Corresponds to the 'question_text' field in the question database table.
     */
    private string $text;

    /**
     * Constructor.
     *
     * Initializes the question entity with the provided values, representing a row from the
     * question database table.
     *
     * @param int $id The ID of the question.
     * @param string $text The text of the question.
     */
    public function __construct(int $id, string $text) {
        $this->id = $id;
        $this->text = $text;
    }

    /**
     * Gets the ID of the question.
     *
     * @return int The question's ID, corresponding to the 'question_id' field in the database.
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * Gets the text of the question.
     *
     * @return string The text of the question, corresponding to the 'question_text' field in the database.
     */
    public function getText(): string
    {
        return $this->text;
    }
}