<?php

namespace Cadus\exceptions;

use Throwable;

/**
 * Class DtoInvalidFieldValue
 *
 * A custom exception used to indicate an invalid value for a specific field in a DTO.
 * This exception is to be used by a controller when a DTO field is not meeting some requirements (eg: invalid email).
 */
class DtoInvalidFieldValue extends \Exception
{
    /**
     * Constructor.
     *
     * @param string $field The name of the field with the invalid value.
     * @param Throwable|null $previous An optional previous exception for exception chaining.
     */
    public function __construct(string $field, ?Throwable $previous = null)
    {
        parent::__construct(
            "Invalid value for field \"" . $field . "\"",
            400,
            $previous
        );
    }
}