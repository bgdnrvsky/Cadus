<?php

namespace Cadus\repositories;

interface IQuestionRepository
{
    public function getQuestions();

    public function registerAnswer(/* */);

    public function hasMemberAnswered(/* */);
}