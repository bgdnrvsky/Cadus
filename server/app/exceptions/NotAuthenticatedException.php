<?php

namespace Cadus\exceptions;

class NotAuthenticatedException extends \Exception
{
    public function __construct(?Throwable $previous = null)
    {
        parent::__construct(
            "You must be authenticated to access this page",
            401,
            $previous
        );
    }
}