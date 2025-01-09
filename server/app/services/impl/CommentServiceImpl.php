<?php

namespace Cadus\services\impl;

use Cadus\core\Session;
use Cadus\repositories\ICommentRepository;
use Cadus\services\ICommentService;

class CommentServiceImpl implements ICommentService
{
    private ICommentRepository $repository;

    public function __construct(ICommentRepository $repository) {
        $this->repository = $repository;
    }

    public function listComments(): array
    {
        return $this->repository->getAll();
    }

    public function saveComment(string $comment): void
    {
        $member = Session::authenticatedMember();
        $this->repository->save($member, $comment);
    }
}