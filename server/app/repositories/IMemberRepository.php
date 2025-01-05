<?php

namespace Cadus\repositories;


use Cadus\models\entities\MemberEntity;

/**
 * Interface IMemberRepository
 *
 * Defines the methods for interacting with the member data in the repository. This interface is responsible for
 * operations related to member registration, validation, and role checking. It is typically implemented by
 * a class that handles communication with the database.
 */
interface IMemberRepository {
    /**
     * Registers a new member by storing their email and password.
     *
     * @param string $email The email of the member to be registered.
     * @param string $password The raw (un-hashed) password of the member to be registered.
     *
     * @return void
     */
    public function registerMember(string $email, string $password): void;

    public function deleteMember(MemberEntity $member): void;

    /**
     * Checks if a member already exists based on their email address.
     *
     * @param string $email The email of the member to check.
     *
     * @return bool Returns true if a member with the provided email already exists, false otherwise.
     */
    public function memberExists(string $email) : bool;

    /**
     * Finds a member by their email address.
     *
     * @param string $email The email of the member to find.
     *
     * @return MemberEntity|null Returns the MemberEntity if a member with the given email exists, null otherwise.
     */
    public function findMemberByEmail(string $email) : ?MemberEntity;

    /**
     * Checks if a member has administrator privileges.
     *
     * @param MemberEntity $member The member to check.
     *
     * @return bool Returns true if the member is an administrator, false otherwise.
     */
    public function isAdministrator(MemberEntity $member) : bool;
}