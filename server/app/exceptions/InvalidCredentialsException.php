<?php

namespace Cadus\exceptions;

class InvalidCredentialsException extends \Exception
{
    public function __construct(?Throwable $previous = null)
    {
        parent::__construct(
            "Invalid credentials",
            401,
            $previous);
    }
}