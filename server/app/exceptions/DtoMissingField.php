<?php

namespace Cadus\exceptions;

use Throwable;

/**
 * Class DtoMissingField
 *
 * A custom exception used to indicate that one or more required fields are missing in a DTO.
 * This exception is typically thrown during data mapping in a Data Transfer Object (DTO) mapper.
 */
class DtoMissingField extends \Exception
{
    /**
     * Constructor.
     *
     * @param array $missingFields An array of field names that are missing.
     * @param Throwable|null $previous An optional previous exception for exception chaining.
     */
    public function __construct(array $missingFields, ?Throwable $previous = null)
    {
        parent::__construct(
            "Expected a value for field('s) \"" . implode(', ', $missingFields) . "\"",
            400,
            $previous
        );
    }
}