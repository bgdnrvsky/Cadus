<?php

namespace Cadus\models\entities;

class QuestionEntity
{
    private int $id;
    private string $text;

    public function __construct(int $id, string $text) {
        $this->id = $id;
        $this->text = $text;
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getText(): string
    {
        return $this->text;
    }
}