<?php

namespace Cadus\controllers;

use Cadus\core\attributes\RequestMapping;
use Cadus\core\attributes\RequireAuthentication;
use Cadus\core\attributes\RestController;
use Cadus\core\ResponseEntity;
use Cadus\exceptions\DtoInvalidFieldValue;
use Cadus\models\dto\CommentDto;
use Cadus\models\dto\DeleteCommentDto;
use Cadus\models\dto\mappers\impl\CommentMapper;
use Cadus\models\dto\mappers\impl\DeleteCommentMapper;
use Cadus\services\ICommentService;

#[RestController("/api/comment")]
class CommentController
{
    private ICommentService $commentService;

    public function __construct(ICommentService $commentService) {
        $this->commentService = $commentService;
    }

    #[RequireAuthentication]
    #[RequestMapping(path: "/mine", method: "GET")]
    public function getMemberComments(): ResponseEntity {
        $comments = $this->commentService->listCommentsByMember();

        return ResponseEntity::success("User's message fetched", $comments);
    }

    #[RequireAuthentication]
    #[RequestMapping(path: "/delete", method: "DELETE", dtoMapper: DeleteCommentMapper::class)]
    public function deleteComment(DeleteCommentDto $deleteRequest): ResponseEntity {
        $this->commentService->deleteComment($deleteRequest->getCommentId());

        return ResponseEntity::success("Message has been deleted");
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

        $commentId = $this->commentService->saveComment($comment->getText());

        $additionalData = [
            "commentId" => $commentId
        ];

        return ResponseEntity::success("Post saved", $additionalData);
    }
}