<?php

namespace Cadus\controllers;

use Cadus\services\ISurveyService;
use function Cadus\controllers\responses\success;

class SurveyController
{
    private ISurveyService $surveyService;

    public function __construct(ISurveyService $surveyService) {
        $this->surveyService = $surveyService;
    }

    public function getQuestions() {
        $questions = $this->surveyService->getQuestions();

        return success("", $questions);
    }
}