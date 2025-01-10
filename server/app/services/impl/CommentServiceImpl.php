<?php

namespace Cadus\services\impl;

use Cadus\core\Session;
use Cadus\models\entities\CommentEntity;
use Cadus\repositories\ICommentRepository;
use Cadus\services\ICommentService;

class CommentServiceImpl implements ICommentService
{
    private ICommentRepository $repository;

    public function __construct(ICommentRepository $repository) {
        $this->repository = $repository;
    }

    public function listCommentsByMember(): array
    {
        $member = Session::authenticatedMember();
        return $this->repository->getAllByMember($member);
    }

    public function listComments(): array
    {
        return $this->repository->getAll();
    }

    public function saveComment(string $comment): int
    {
        $member = Session::authenticatedMember();
        return $this->repository->save($member, $comment);
    }

    public function deleteComment(int $commentId): void
    {
        $this->repository->deleteCommentById($commentId);
    }
}