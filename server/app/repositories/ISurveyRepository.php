<?php

namespace Cadus\repositories;

use Cadus\models\entities\AllowedAnswerEntity;
use Cadus\models\entities\MemberEntity;
use Cadus\models\entities\QuestionEntity;

/**
 * Interface ISurveyRepository
 *
 * Defines the methods for interacting with the survey data in the repository. This interface is responsible for
 * operations related to retrieving questions, registering answers, and checking the member's interactions with the survey.
 * It is typically implemented by a class that handles communication with the database.
 */
interface ISurveyRepository
{
    /**
     * Retrieves all the questions.
     *
     * This method returns an array of associative arrays where each element contains a question's text,
     * its available answers, and whether the member has answered it or not.
     * The structure of the returned array is as follows:
     *
     * [
     *     ['questionText' => 'Question text here', 'answers' => ['Answer 1', 'Answer 2'], 'answered' => true],
     *     ...
     * ]
     *
     * @param MemberEntity $member The member for whom to retrieve the questions.
     *
     * @return array An array of associative arrays (questions) with each question's text, available answers,
     *               and whether the member has answered it.
     */
    public function getQuestions(MemberEntity $member): array;

    /**
     * Registers a member's answer to a specific question.
     *
     * @param MemberEntity $member The member providing the answer.
     * @param AllowedAnswerEntity $answer The allowed answer to be recorded for the member.
     *
     * @return void
     */
    public function registerAnswer(MemberEntity $member, AllowedAnswerEntity $answer): void;

    /**
     * Finds a question by its text.
     *
     * @param string $questionText The text of the question to find.
     *
     * @return QuestionEntity|null Returns the QuestionEntity if a question with the given text exists, null otherwise.
     */
    public function findQuestionByText(string $questionText): ?QuestionEntity;

    /**
     * Finds an allowed answer by its text for a specific question.
     *
     * @param QuestionEntity $question The question to which the answer belongs.
     * @param string $answerText The text of the allowed answer to find.
     *
     * @return AllowedAnswerEntity|null Returns the AllowedAnswerEntity if an allowed answer with the given text exists for the question, null otherwise.
     */
    public function findAllowedAnswerByText(QuestionEntity $question, string $answerText): ?AllowedAnswerEntity;

    /**
     * Checks if a member has already answered a specific question.
     *
     * @param MemberEntity $member The member to check.
     * @param QuestionEntity $question The question to check for an answer.
     *
     * @return bool Returns true if the member has answered the question, false otherwise.
     */
    public function hasMemberAnsweredQuestion(MemberEntity $member, QuestionEntity $question) : bool;

    // TODO: utiliser une clé de gestion pour identifier la question facilement
    public function answersRepartition(int $questionId) : array;
}