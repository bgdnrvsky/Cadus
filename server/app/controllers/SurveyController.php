<?php

namespace Cadus\controllers;

use Cadus\core\attributes\RequestMapping;
use Cadus\core\attributes\RestController;
use Cadus\exceptions\NotAuthenticatedException;
use Cadus\models\dto\AnswerDto;
use Cadus\models\dto\mappers\impl\AnswerMapper;
use Cadus\services\ISurveyService;
use function Cadus\controllers\responses\success;

#[RestController("/api/survey")]
class SurveyController
{
    private ISurveyService $surveyService;

    public function __construct(ISurveyService $surveyService) {
        $this->surveyService = $surveyService;
    }

    #[RequestMapping(path: "/questions", method: "GET")]
    public function getQuestions(): false|string
    {
        session_start();

        if (!isset($_SESSION['authenticated_member'])) {
            throw new NotAuthenticatedException();
        }

        $member = $_SESSION['authenticated_member'];

        $questions = $this->surveyService->getQuestions($member);

        return success("", $questions);
    }

    #[RequestMapping(path: "/answer", method: "POST", dtoMapper: AnswerMapper::class)]
    public function registerAnswer(AnswerDto $answer): false|string
    {
        session_start();

        if (!isset($_SESSION['authenticated_member'])) {
            throw new NotAuthenticatedException();
        }

        $this->surveyService->registerAnswer($answer);

        return success("Answer successfully registered");
    }
}