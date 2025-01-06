<?php

namespace Cadus\controllers;

use Cadus\core\attributes\RequestMapping;
use Cadus\core\attributes\RestController;
use Cadus\core\ResponseEntity;
use Cadus\exceptions\NotAuthenticatedException;
use Cadus\models\dto\mappers\AccountUpdateDto;
use Cadus\models\dto\mappers\impl\AccountUpdateMapper;
use Cadus\services\IAccountService;

#[RestController(path: "/api/account")]
class AccountController
{
    public IAccountService $accountService;

    public function __construct(IAccountService $accountService)
    {
        $this->accountService = $accountService;
    }

    #[RequestMapping(path: "/update", method: "PUT", dtoMapper: AccountUpdateMapper::class)]
    public function updateAccount(AccountUpdateDto $update): ResponseEntity {
        session_start();

        if (!isset($_SESSION["authenticated_member"])) {
            throw new NotAuthenticatedException();
        }

        $oldMember = $_SESSION["authenticated_member"];
        $newMember = $this->accountService->updateAccount($oldMember, $update);

        $additionalData = [
            "memberEmail" => $newMember->getLogin(),
        ];;

        return ResponseEntity::success("Account updated", $additionalData);
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