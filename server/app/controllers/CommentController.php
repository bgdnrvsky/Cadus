<?php

namespace Cadus\controllers;

use Cadus\core\attributes\RequestMapping;
use Cadus\core\attributes\RequireAuthentication;
use Cadus\core\attributes\RestController;
use Cadus\core\ResponseEntity;
use Cadus\core\Session;
use Cadus\exceptions\DtoInvalidFieldValue;
use Cadus\models\dto\CommentDto;
use Cadus\models\dto\mappers\impl\CommentMapper;
use Cadus\services\ICommentService;

#[RestController("/api/comment")]
class CommentController
{
    private ICommentService $commentService;

    public function __construct(ICommentService $commentService) {
        $this->commentService = $commentService;
    }

    #[RequestMapping(path: "/list", method: "GET")]
    public function getComments() : ResponseEntity {
        $posts = $this->commentService->listComments();

        return ResponseEntity::success("Posts retrieved", $posts);
    }

    #[RequireAuthentication]
    #[RequestMapping(path: "/save", method: "POST", dtoMapper: CommentMapper::class)]
    public function saveComment(CommentDto $comment) : ResponseEntity {
        if (!strlen(trim($comment->getText()))) {
            throw new DtoInvalidFieldValue("comment-text");
        }

        $this->commentService->saveComment($comment->getText());

        return ResponseEntity::success("Post saved");
    }
}