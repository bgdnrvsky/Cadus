<?php

namespace Cadus\exceptions;

use Throwable;

/**
 * Class NotAuthorizedException
 *
 * A custom exception used to indicate that the user is not authorized to access some resources.
 * This exception is typically thrown when an action requires authentication but the user is not logged in or does not
 * have required privileges.
 */
class NotAuthorizedException extends \Exception
{
    /**
     * Constructor.
     *
     * @param Throwable|null $previous An optional previous exception for exception chaining.
     */
    public function __construct(?Throwable $previous = null)
    {
        parent::__construct(
            "You are not authorized to access the requested resource",
            401,
            $previous
        );
    }
}