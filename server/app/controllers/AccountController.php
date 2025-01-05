<?php

namespace Cadus\controllers;

use Cadus\core\attributes\RequestMapping;
use Cadus\core\attributes\RestController;
use Cadus\core\ResponseEntity;
use Cadus\exceptions\NotAuthenticatedException;
use Cadus\services\IAccountService;

#[RestController(path: "/api/account")]
class AccountController
{
    public IAccountService $accountService;

    public function __construct(IAccountService $accountService)
    {
        $this->accountService = $accountService;
    }

    #[RequestMapping(path: "/delete", method: "DELETE")]
    public function deleteAccount(): ResponseEntity {
        session_start();

        if (!isset($_SESSION["authenticated_member"])) {
            throw new NotAuthenticatedException();
        }

        $member = $_SESSION["authenticated_member"];
        $this->accountService->deleteAccount($member);

        return ResponseEntity::success("Account deleted");
    }
}