<?php

namespace Cadus\services;

use Cadus\models\dto\AnswerDto;
use Cadus\models\entities\MemberEntity;
use Exception;

/**
 * Interface ISurveyService
 *
 * Interface for handling survey-related functionalities. This interface defines the methods necessary for
 * retrieving survey questions and registering answers. It provides a way to interact with survey services by
 * accepting `AnswerDto` objects for answer registration and returning survey data such as questions.
 */
interface ISurveyService
{
    /**
     * Retrieves the questions for the survey for a specific member.
     *
     * This method accepts a `MemberEntity` and returns a set of survey questions along with wether or not the member
     * has already answered it. The returned array is structured as an associative array with question text, possible
     * answers, and whether the member has answered the question.
     *
     * @param MemberEntity $member The member whose questions are being retrieved.
     *
     * @return array An associative array with the following format:
     * [
     *     ['questionText' => '', 'answers' => '', 'answered' => ''],
     * ]
     *
     * @throws Exception If an error occurs while fetching the questions, such as database issues.
     */
    public function getQuestions(MemberEntity $member): array;

    public function getAnswers(int $questionId): array;

    /**
     * Registers a member's answer to a survey question, but does not associate the answer with the member.
     *
     * This method accepts a `MemberEntity` representing the member answering the question, and an `AnswerDto`
     * object representing the answer details (question and the answer provided). It stores the member's answer in the
     * system, typically in the database, associating it with the relevant question.
     *
     * @param MemberEntity $member The member who is answering the survey question.
     * @param AnswerDto $answerDto The answer DTO containing the survey question and the member's selected answer.
     *
     * @return void
     *
     * @throws Exception If an error occurs while saving the answer (e.g., invalid data, database issues).
     */
    public function registerAnswer(MemberEntity $member, AnswerDto $answerDto): void;
}