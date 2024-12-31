<?php

namespace Cadus\services;

use Cadus\models\dto\AnswerDto;
use Cadus\models\entities\MemberEntity;

interface ISurveyService
{
    public function getQuestions(MemberEntity $member);

    public function registerAnswer(AnswerDto $answerDto);
}