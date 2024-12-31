<?php

namespace Cadus\exceptions;

class DtoMissingField extends \Exception
{
    public function __construct(array $missingFields, ?Throwable $previous = null)
    {
        parent::__construct(
            "Expected a value for field('s) \"" . implode(', ', $missingFields) . "\"",
            400,
            $previous
        );
    }
}