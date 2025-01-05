<?php

namespace Cadus\controllers;

use Cadus\core\attributes\RequestMapping;
use Cadus\core\attributes\RestController;
use Cadus\core\ResponseEntity;
use Cadus\exceptions\DtoInvalidFieldValue;
use Cadus\exceptions\InvalidCredentialsException;
use Cadus\models\dto\CredentialsDto;
use Cadus\models\dto\mappers\impl\LoginMapper;
use Cadus\models\dto\mappers\impl\RegisterMapper;
use Cadus\models\dto\RegisterDto;
use Cadus\services\IAuthenticationService;

/**
 * AuthenticationController is responsible for handling the authentication-related HTTP requests for user registration and login.
 * It contains two main endpoints: one for signing up new users (`/signup`) and one for signing in existing users (`/signin`).
 * The controller communicates with the AuthenticationService to perform authentication actions and provides appropriate responses.
 */
#[RestController(path: "/api/auth")]
class AuthenticationController
{
    /**
     * @var IAuthenticationService The service for handling authentication logic.
     */
    private IAuthenticationService $authService;

    /**
     * Constructor to initialize AuthenticationController with an instance of IAuthenticationService.
     *
     * @param IAuthenticationService $authenticationService The authentication service.
     */
    public function __construct(IAuthenticationService $authenticationService) {
        $this->authService = $authenticationService;
    }

    /**
     * Registers a new user with the provided registration data.
     *
     * This method validates the provided registration data, creates the credentials object,
     * and passes it to the AuthenticationService for registration.
     *
     * @param RegisterDto $data The registration data (email, password, password confirmation, terms acceptance).
     *
     * @return ResponseEntity The response indicating the success of the registration process.
     *
     * @throws DtoInvalidFieldValue If the provided registration data is invalid.
     */
    #[RequestMapping(path: "/signup", method: "POST", dtoMapper: RegisterMapper::class)]
    public function register(RegisterDto $data): ResponseEntity {
        $this->checkRegisterData($data);

        $memberCreds = new CredentialsDto(
            $data->getLogin(),
            $data->getPassword()
        );

        $this->authService->register($memberCreds);

        return ResponseEntity::success("Member successfully registered");
    }

    /**
     * Logs in a user with the provided credentials.
     *
     * This method validates the provided login data and passes it to the AuthenticationService for authentication.
     * If the login is successful, it returns the logged-in member's data.
     *
     * @param CredentialsDto $creds The credentials (login and password) for the login.
     *
     * @return ResponseEntity The response indicating the success of the login process along with additional member data.
     *
     * @throws DtoInvalidFieldValue If the provided login fields are invalid.
     * @throws InvalidCredentialsException If credentials do not match those in DB
     */
    #[RequestMapping(path: "/signin", method: "POST", dtoMapper: LoginMapper::class)]
    public function login(CredentialsDto $creds): ResponseEntity {
        $this->checkLoginData($creds);

        // TODO: if the user tries to connect on another account, log him out first
        $member = $this->authService->login($creds);

        $additionalData = [
            "memberId" => $member->getId(),
            "memberEmail" => $member->getLogin(),
            "admin" => $this->authService->isAdmin($member)
        ];

        return ResponseEntity::success("Login successful", $additionalData);
    }

    /**
     * Logs out a user.
     *
     * This method is mapped to the `/signout` endpoint and processes POST requests
     * to log out the currently authenticated user. It delegates the logout operation
     * to the authentication service and returns a success response upon completion.
     *
     * @return ResponseEntity Returns a success response with the message "Logout successful".
     *
     * Example response:
     * {
     *     "message": "Logout successful",
     *     "data": null
     * }
     */
    #[RequestMapping(path: "/signout", method: "POST")]
    public function logout(): ResponseEntity {
        $this->authService->logout();

        return ResponseEntity::success("Logout successful");
    }

    /**
     * Validates the provided login data (email and password).
     *
     * This method checks that the email is valid and the password is non-empty.
     *
     * @param CredentialsDto $data The login credentials (email and password) to be validated.
     *
     * @return void
     *
     * @throws DtoInvalidFieldValue If any field in the login data is invalid.
     */
    private function checkLoginData(CredentialsDto $data): void {
        $sanitize_email = filter_var($data->getLogin(), FILTER_SANITIZE_EMAIL);

        if ($sanitize_email !== $data->getLogin() || !filter_var($data->getLogin(), FILTER_VALIDATE_EMAIL)) {
            throw new DtoInvalidFieldValue("login-email");
        }

        if (trim($data->getPassword()) === "") {
            throw new DtoInvalidFieldValue("login-password");
        }
    }

    /**
     * Validates the provided registration data (email, password, password confirmation, and terms acceptance).
     *
     * This method checks that the email is valid, the password is non-empty, the password confirmation matches,
     * and the terms are accepted.
     *
     * @param RegisterDto $data The registration data to be validated.
     *
     * @return void
     *
     * @throws DtoInvalidFieldValue If any field in the registration data is invalid.
     */
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