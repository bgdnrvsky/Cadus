<?php

namespace Cadus\exceptions;

class DtoInvalidFieldValue extends \Exception
{
    public function __construct(string $field, ?Throwable $previous = null)
    {
        parent::__construct(
            "Invalid value for field \"" . $field . "\"",
            400,
            $previous
        );
    }
}