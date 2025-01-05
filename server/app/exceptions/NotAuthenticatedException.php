<?php

namespace Cadus\exceptions;

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
            "You must be authenticated to access the requested resource",
            401,
            $previous
        );
    }
}