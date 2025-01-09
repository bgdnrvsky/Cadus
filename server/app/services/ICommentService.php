<?php

namespace Cadus\services;

interface ICommentService
{
    public function listComments(): array;

    public function saveComment(string $comment);
}