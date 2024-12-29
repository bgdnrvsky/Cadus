<?php

namespace Cadus\repositories;

interface ISurveyRepository
{
    public function getQuestions();

    public function registerAnswer(/* */);

    public function hasMemberAnswered(/* */);
}