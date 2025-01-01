<?php

namespace Cadus\controllers;

use Cadus\core\attributes\RequestMapping;
use Cadus\core\attributes\RestController;
use Cadus\exceptions\DtoInvalidFieldValue;
use Cadus\models\dto\CredentialsDto;
use Cadus\models\dto\mappers\impl\LoginMapper;
use Cadus\models\dto\mappers\impl\RegisterMapper;
use Cadus\models\dto\RegisterDto;
use Cadus\services\IAuthenticationService;
use function Cadus\controllers\responses\success;

#[RestController(path: "/api/auth")]
class AuthenticationController
{
    private IAuthenticationService $authService;

    public function __construct(IAuthenticationService $authenticationService) {
        $this->authService = $authenticationService;
    }

    #[RequestMapping(path: "/signup", method: "POST", dtoMapper: RegisterMapper::class)]
    public function register(RegisterDto $data): string|false {
        $this->checkRegisterData($data);

        $memberCreds = new CredentialsDto(
            $data->getLogin(),
            $data->getPassword()
        );

        $this->authService->register($memberCreds);

        return success("Member successfully registered");
    }

    #[RequestMapping(path: "/signin", method: "POST", dtoMapper: LoginMapper::class)]
    public function login(CredentialsDto $creds): string|false {
        $this->checkLoginData($creds);

        $member = $this->authService->login($creds);

        $additionalData = [
            "memberId" => $member->getId(),
            "memberEmail" => $member->getLogin()
        ];

        return success("Login successful", $additionalData);
    }

    private function checkLoginData(CredentialsDto $data): void {
        $sanitize_email = filter_var($data->getLogin(), FILTER_SANITIZE_EMAIL);

        if ($sanitize_email !== $data->getLogin() || !filter_var($data->getLogin(), FILTER_VALIDATE_EMAIL)) {
            throw new DtoInvalidFieldValue("login-email");
        }

        if (trim($data->getPassword()) === "") {
            throw new DtoInvalidFieldValue("login-password");
        }
    }

    private function checkRegisterData(RegisterDto $data): void {
        $sanitize_email = filter_var($data->getLogin(), FILTER_SANITIZE_EMAIL);

        if ($sanitize_email !== $data->getLogin() || !filter_var($data->getLogin(), FILTER_VALIDATE_EMAIL)) {
            throw new DtoInvalidFieldValue("register-email");
        }

        if (trim($data->getPassword()) === ""|| $data->getPassword() !== $data->getPasswordConfirm()) {
            throw new DtoInvalidFieldValue("register-password-confirm");
        }

        if ($data->getAcceptTerms() !== true) {
            throw new DtoInvalidFieldValue("accept-terms");
        }
    }
}