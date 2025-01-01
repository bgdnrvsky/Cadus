<?php

namespace Cadus\exceptions;

use Throwable;

/**
 * Class NotAuthenticatedException
 *
 * A custom exception used to indicate that the user is not authenticated.
 * This exception is typically thrown when an action requires authentication but the user is not logged in.
 */
class NotAuthenticatedException extends \Exception
{
    /**
     * Constructor.
     *
     * @param Throwable|null $previous An optional previous exception for exception chaining.
     */
    public function __construct(?Throwable $previous = null)
    {
        parent::__construct(
            "You must be authenticated to access this page",
            401,
            $previous
        );
    }
}