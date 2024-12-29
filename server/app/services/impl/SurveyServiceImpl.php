<?php

namespace Cadus\services\impl;

use Cadus\repositories\ISurveyRepository;
use Cadus\services\ISurveyService;

class SurveyServiceImpl implements ISurveyService
{
    private ISurveyRepository $surveyRepository;

    public function __construct(ISurveyRepository $surveyRepository) {
        $this->surveyRepository = $surveyRepository;
    }

    public function getQuestions() {
        return $this->surveyRepository->getQuestions();
    }
}