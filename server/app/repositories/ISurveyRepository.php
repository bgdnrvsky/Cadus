<?php

namespace Cadus\repositories;

use Cadus\models\entities\AllowedAnswerEntity;
use Cadus\models\entities\MemberEntity;
use Cadus\models\entities\QuestionEntity;

interface ISurveyRepository
{
    public function getQuestions(MemberEntity $member): array;

    public function registerAnswer(MemberEntity $member, AllowedAnswerEntity $answer);

    public function findQuestionByText(string $questionText): ?QuestionEntity;

    public function findAllowedAnswerByText(QuestionEntity $question, string $answerText): ?AllowedAnswerEntity;

    public function hasMemberAnsweredQuestion(MemberEntity $member, QuestionEntity $question) : bool;
}