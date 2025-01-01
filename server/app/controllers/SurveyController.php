<?php

namespace Cadus\controllers;

use Cadus\core\attributes\RequestMapping;
use Cadus\core\attributes\RestController;
use Cadus\core\ResponseEntity;
use Cadus\exceptions\NotAuthenticatedException;
use Cadus\models\dto\AnswerDto;
use Cadus\models\dto\mappers\impl\AnswerMapper;
use Cadus\services\ISurveyService;
use Exception;

/**
 * SurveyController handles survey-related HTTP requests, such as retrieving survey questions
 * and submitting answers to those questions. It interacts with the SurveyService to execute
 * business logic and returns the appropriate response.
 */
#[RestController("/api/survey")]
class SurveyController
{
    /**
     * @var ISurveyService The service for handling survey-related logic.
     */
    private ISurveyService $surveyService;

    /**
     * Constructor to initialize SurveyController with an instance of ISurveyService.
     *
     * @param ISurveyService $surveyService The survey service.
     */
    public function __construct(ISurveyService $surveyService) {
        $this->surveyService = $surveyService;
    }

    /**
     * Retrieves the list of survey questions for the authenticated member.
     *
     * This method fetches the survey questions and associated answers for the logged-in user.
     * It returns an array of questions, answers, and a flag indicating whether the user
     * has already answered the question.
     *
     * @return ResponseEntity The response containing the list of questions and answers.
     *
     * @throws NotAuthenticatedException If the user is not authenticated.
     * @throws Exception for other exceptions.
     */
    #[RequestMapping(path: "/questions", method: "GET")]
    public function getQuestions(): ResponseEntity
    {
        session_start();

        if (!isset($_SESSION['authenticated_member'])) {
            throw new NotAuthenticatedException();
        }

        $member = $_SESSION['authenticated_member'];

        $questions = $this->surveyService->getQuestions($member);

        return ResponseEntity::success("", $questions);
    }

    /**
     * Registers an answer for a survey question for the authenticated member.
     *
     * This method validates the answer provided for a survey question and registers it.
     * It checks that the user is authenticated and that the answer is valid before proceeding
     * to save it in the repository.
     *
     * @param AnswerDto $answer The answer data transfer object containing the question and answer details.
     *
     * @return ResponseEntity The response indicating the success of the answer registration.
     *
     * @throws NotAuthenticatedException If the user is not authenticated (no session or invalid session).
     * @throws Exception for other exceptions.
     */
    #[RequestMapping(path: "/answer", method: "POST", dtoMapper: AnswerMapper::class)]
    public function registerAnswer(AnswerDto $answer): ResponseEntity
    {
        session_start();

        if (!isset($_SESSION['authenticated_member'])) {
            throw new NotAuthenticatedException();
        }

        $member = $_SESSION['authenticated_member'];

        $this->surveyService->registerAnswer($member, $answer);

        return ResponseEntity::success("Answer successfully registered");
    }
}