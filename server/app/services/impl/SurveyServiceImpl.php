<?php

namespace Cadus\services\impl;

use Cadus\models\dto\AnswerDto;
use Cadus\models\entities\MemberEntity;
use Cadus\repositories\ISurveyRepository;
use Cadus\services\ISurveyService;

class SurveyServiceImpl implements ISurveyService
{
    private ISurveyRepository $surveyRepository;

    public function __construct(ISurveyRepository $surveyRepository) {
        $this->surveyRepository = $surveyRepository;
    }

    public function getQuestions(MemberEntity $member) {
        return $this->surveyRepository->getQuestions($member);
    }

    public function registerAnswer(AnswerDto $answerDto) {
        $question = $this->surveyRepository->findQuestionByText($answerDto->getQuestion());

        // Question is unknown
        if (!$question) {
            return;
        }

        $allowedAnswer = $this->surveyRepository->findAllowedAnswerByText($question, $answerDto->getAnswer());

        // Question is not allowed
        if (!$allowedAnswer) {
            return;
        }

        $member = $_SESSION['authenticated_member'];

        // Member has already answered
        if ($this->surveyRepository->hasMemberAnsweredQuestion($member, $question)) {
            return;
        }

        $this->surveyRepository->registerAnswer($member, $allowedAnswer);
    }
}