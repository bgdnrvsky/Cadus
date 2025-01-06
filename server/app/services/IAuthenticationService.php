<?php

namespace Cadus\services;

use Cadus\exceptions\InvalidCredentialsException;
use Cadus\models\dto\CredentialsDto;
use Cadus\models\entities\MemberEntity;
use Exception;

/**
 * Interface IAuthenticationService
 *
 * Interface for handling authentication-related functionalities. This interface defines the methods necessary for
 * registering a new member and logging in an existing member.
 */
interface IAuthenticationService
{
    /**
     * Registers a new member.
     *
     * This method accepts a `CredentialsDto` object containing the member's login credentials and executes
     * the registration process. The implementation will likely include verifying if the member already exists,
     * hashing the password, and storing the member data in the database.
     *
     * @param CredentialsDto $memberCreds The credentials of the member attempting to register.
     *
     * @return void
     *
     * @throws Exception If an error occurs during the registration process, such as an existing member or invalid data.
     */
    public function register(CredentialsDto $memberCreds) : void;

    /**
     * Logs in an existing member.
     *
     * This method accepts a `CredentialsDto` object containing the member's login credentials and processes
     * the login attempt. If the credentials are valid, it will return a `MemberEntity` object representing
     * the logged-in member. If the credentials are invalid, it may throw an exception.
     *
     * @param CredentialsDto $creds The credentials of the member attempting to log in.
     *
     * @return MemberEntity The member entity representing the logged-in member.
     *
     * @throws InvalidCredentialsException If the login attempt fails due to incorrect credentials.
     */
    public function login(CredentialsDto $creds) : MemberEntity;

    /**
     * Logs out the currently authenticated user.
     *
     * This method ends the user's session and clears any authentication-related data,
     * effectively logging the user out of the system.
     *
     * @return void This method does not return any value.
     */
    public function logout() : void;

    /**
     * Checks if the given member has admin privileges.
     *
     * This method verifies whether the specified member entity has administrative rights.
     *
     * @param MemberEntity $member The member entity to be checked.
     *
     * @return bool Returns true if the member has admin privileges; otherwise, false.
     */
    public function isAdmin(MemberEntity $member): bool;
}