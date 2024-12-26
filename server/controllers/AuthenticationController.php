<?php

namespace Cadus\controllers;

use Cadus\services\IAuthenticationService;

class AuthenticationController
{
    private IAuthenticationService $authService;

    public function __construct(IAuthenticationService $authenticationService) {
        $this->authService = $authenticationService;
    }

    public function login() {
        // 1. Verify $_POST data

        // 2. Delegate user & password verification  to the auth service

        // 3. Login user
    }

    public function register() {
        // 1. Verify $_POST data

        // 2. Delegate user verification and registration
        $this->authService->register(/* TODO: create member entity object */);

        // 3. Return status
    }
}