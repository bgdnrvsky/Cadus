<?php

namespace Cadus\controllers;

use Cadus\models\dto\CredentialsDto;
use Cadus\services\IAuthenticationService;
use function Cadus\controllers\responses\error;
use function Cadus\controllers\responses\success;

class AuthenticationController
{
    private IAuthenticationService $authService;

    public function __construct(IAuthenticationService $authenticationService) {
        $this->authService = $authenticationService;
    }

    public function register(array $data): string|false {
        if (!$this->verifyRegisterData($data)) {
            return error("Invalid data sent");
        }

        $memberCreds = new CredentialsDto(
            $data['register-email'],
            $data['register-password']
        );

        // 2. Delegate user verification and registration
        $this->authService->register($memberCreds);

        return success("Member successfully registered");
    }

    public function login(array $data): string|false {
        if (!$this->verifyLoginData($data)) {
            return error("Invalid data sent");
        }

        $creds = new CredentialsDto(
            $data['login-email'],
            $data['login-password']
        );

        // 2. Delegate user & password verification  to the auth service
        $member = $this->authService->login($creds);

        if (!$member) {
            return error("Invalid credentials", 401);
        }

        $additionalData = [
            "memberId" => $member->getId(),
            "memberEmail" => $member->getLogin()
        ];

        return success("Login successful", $additionalData);
    }

    private function verifyLoginData(array $data): bool {
        $original_email = $data['login-email'] ?? '';
        $sanitize_email = filter_var($original_email, FILTER_SANITIZE_EMAIL);

        if ($sanitize_email !== $original_email || !filter_var($original_email, FILTER_VALIDATE_EMAIL)) {
            return false;
        }

        return $data['login-password'] && trim($data['login-password']) !== '';
    }

    private function verifyRegisterData(array $data) : bool {
        $original_email = $data['register-email'] ?? '';
        $sanitize_email = filter_var($original_email, FILTER_SANITIZE_EMAIL);

        if ($sanitize_email !== $original_email || !filter_var($original_email, FILTER_VALIDATE_EMAIL)) {
            return false;
        }

        return $data["register-password-confirm"] === $data["register-password"]
            && $data["accept-terms"] === true;
    }
}