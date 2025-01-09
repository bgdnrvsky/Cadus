<?php

namespace Cadus\controllers;

use Cadus\core\attributes\RequestMapping;
use Cadus\core\attributes\RequireAuthentication;
use Cadus\core\attributes\RestController;
use Cadus\core\ResponseEntity;
use Cadus\core\Session;
use Cadus\exceptions\NotAuthenticatedException;
use Cadus\exceptions\NotAuthorizedException;
use Cadus\models\dto\AnswerDto;
use Cadus\models\dto\AnswersQueryDto;
use Cadus\models\dto\mappers\impl\AnswerMapper;
use Cadus\models\dto\mappers\impl\AnswersQueryMapper;
use Cadus\services\IAuthenticationService;
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


    private IAuthenticationService $authenticationService;

    /**
     * Constructor to initialize SurveyController with an instance of ISurveyService.
     *
     * @param ISurveyService $surveyService The survey service.
     */
    public function __construct(ISurveyService $surveyService, IAuthenticationService $authenticationService) {
        $this->surveyService = $surveyService;
        $this->authenticationService = $authenticationService;
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
     * @throws NotAuthorizedException If the user is not authenticated.
     * @throws Exception for other exceptions.
     */
    #[RequireAuthentication]
    #[RequestMapping(path: "/questions", method: "GET")]
    public function getQuestions(): ResponseEntity
    {
        $member = Session::authenticatedMember();

        $questions = $this->surveyService->getQuestions($member);

        return ResponseEntity::success("", $questions);
    }

    /**
     * Retrieve answers for a specific survey question.
     *
     * This method is mapped to the `/answers` endpoint and requires that the
     * user is authenticated and has admin privileges.
     *
     * @param AnswersQueryDto $query The data transfer object containing the query parameters,
     *                                including the question ID for which answers are to be retrieved.
     *
     * @return ResponseEntity Returns a success response containing:
     *                        -  An array of answers under the "entries" key as the additionalData.
     *                          Each entry includes:
     *                          - "answerId" (int): The ID of the answer.
     *                          - "answerText" (string): The text of the answer.
     *                          - "answerCount" (int): The count of responses for this answer.
     *
     * @throws NotAuthorizedException Thrown if the user is not authenticated or does not have admin privileges.
     *
     * Example response:
     * {
     *     "message": "Answers repartition",
     *     "additionalData": {
     *         "entries": [
     *             {
     *                 "answerId": 1,
     *                 "answerText": "Option A",
     *                 "answerCount": 42
     *             },
     *             {
     *                 "answerId": 2,
     *                 "answerText": "Option B",
     *                 "answerCount": 15
     *             }
     *         ]
     *     }
     * }
     */
    #[RequireAuthentication]
    #[RequestMapping(path: "/answers", method: "GET", dtoMapper: AnswersQueryMapper::class)]
    public function getAnswers(AnswersQueryDto $query): ResponseEntity
    {
        $member = Session::authenticatedMember();

        if (!$this->authenticationService->isAdmin($member)) {
            throw new NotAuthorizedException();
        }

        $answers = $this->surveyService->getAnswers($query->getQuestionId());

        return ResponseEntity::success("Answers repartition", ["entries" => $answers]);
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
     * @throws NotAuthorizedException If the user is not authenticated (no session or invalid session).
     * @throws Exception for other exceptions.
     */
    #[RequireAuthentication]
    #[RequestMapping(path: "/answer", method: "POST", dtoMapper: AnswerMapper::class)]
    public function registerAnswer(AnswerDto $answer): ResponseEntity
    {
        $member = Session::authenticatedMember();

        $this->surveyService->registerAnswer($member, $answer);

        return ResponseEntity::success("Answer successfully registered");
    }
}