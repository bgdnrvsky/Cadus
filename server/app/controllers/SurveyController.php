<?php

namespace Cadus\controllers;

use Cadus\core\attributes\RequestMapping;
use Cadus\core\attributes\RestController;
use Cadus\core\ResponseEntity;
use Cadus\exceptions\NotAuthenticatedException;
use Cadus\models\dto\AnswerDto;
use Cadus\models\dto\mappers\impl\AnswerMapper;
use Cadus\services\ISurveyService;

#[RestController("/api/survey")]
class SurveyController
{
    private ISurveyService $surveyService;

    public function __construct(ISurveyService $surveyService) {
        $this->surveyService = $surveyService;
    }

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

    #[RequestMapping(path: "/answer", method: "POST", dtoMapper: AnswerMapper::class)]
    public function registerAnswer(AnswerDto $answer): ResponseEntity
    {
        session_start();

        if (!isset($_SESSION['authenticated_member'])) {
            throw new NotAuthenticatedException();
        }

        $this->surveyService->registerAnswer($answer);

        return ResponseEntity::success("Answer successfully registered");
    }
}