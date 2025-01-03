<?php

namespace Cadus\exceptions;

use Throwable;

/**
 * Class InvalidCredentialsException
 *
 * A custom exception used to indicate that the provided credentials are invalid.
 * This exception is typically thrown during user authentication when the credentials do not match.
 */
class InvalidCredentialsException extends \Exception
{
    /**
     * Constructor.
     *
     * @param Throwable|null $previous An optional previous exception for exception chaining.
     */
    public function __construct(?Throwable $previous = null)
    {
        parent::__construct(
            "Invalid credentials",
            401,
            $previous);
    }
}