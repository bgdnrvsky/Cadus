<?php

namespace Cadus\services;

interface ICommentService
{
    public function listCommentsByMember(): array;

    public function listComments(): array;

    public function saveComment(string $comment): int;

    public function deleteComment(int $commentId): void;
}