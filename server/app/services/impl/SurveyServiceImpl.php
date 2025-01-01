<?php

namespace Cadus\services\impl;

use Cadus\models\dto\AnswerDto;
use Cadus\models\entities\MemberEntity;
use Cadus\repositories\ISurveyRepository;
use Cadus\services\ISurveyService;

/**
 * SurveyServiceImpl is an implementation of the ISurveyService interface.
 * It handles the business logic for managing survey questions and registering answers.
 * This service interacts with the survey repository to fetch questions and store answers.
 */
class SurveyServiceImpl implements ISurveyService
{
    /**
     * @var ISurveyRepository The repository for managing survey-related data operations.
     */
    private ISurveyRepository $surveyRepository;

    /**
     * Constructor to initialize the SurveyServiceImpl with an instance of ISurveyRepository.
     *
     * @param ISurveyRepository $surveyRepository The repository for fetching and saving survey-related data.
     */
    public function __construct(ISurveyRepository $surveyRepository) {
        $this->surveyRepository = $surveyRepository;
    }

    public function getQuestions(MemberEntity $member): array
    {
        return $this->surveyRepository->getQuestions($member);
    }

    public function registerAnswer(MemberEntity $member, AnswerDto $answerDto): void {
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

        // Member has already answered
        if ($this->surveyRepository->hasMemberAnsweredQuestion($member, $question)) {
            return;
        }

        $this->surveyRepository->registerAnswer($member, $allowedAnswer);
    }
}