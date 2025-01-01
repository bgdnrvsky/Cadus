<?php

namespace Cadus\models\dto\mappers\impl;

use Cadus\exceptions\DtoMissingField;
use Cadus\models\dto\mappers\IArrayDtoMapper;

/**
 * Class AbstractArrayDtoMapper
 *
 * An abstract class that implements the IArrayDtoMapper interface.
 * It provides a base implementation for mapping an array of data to a DTO, with validation for required fields.
 * Subclasses must implement the methods for specifying expected keys and constructing the DTO object.
 */
abstract class AbstractArrayDtoMapper implements IArrayDtoMapper
{
    /**
     * Maps an array of data to a DTO.
     *
     * This method checks that all expected keys are present in the data array.
     * If any required keys are missing, a DtoMissingField exception is thrown.
     * Then, it delegates the process of constructing the DTO to the buildDto method.
     *
     * @param array $data The array of data to map to a DTO.
     *
     * @return mixed The constructed DTO object.
     *
     * @throws DtoMissingField If any expected keys are missing in the input data.
     */
    public function map(array $data): mixed {
        $missingKeys = array_diff($this->expectedKeys(), array_keys($data));

        if (!empty($missingKeys)) {
            throw new DtoMissingField($missingKeys);
        }

        return $this->buildDto($data);
    }

    /**
     * Gets the expected keys for the data array.
     *
     * This abstract method must be implemented in subclasses to specify the required fields for the DTO mapping.
     *
     * @return array An array of the expected field names.
     */
    abstract protected function expectedKeys(): array;

    /**
     * Builds a DTO from the given data array.
     *
     * This abstract method must be implemented in subclasses to define how the DTO object is created
     * from the input data.
     *
     * @param array $data The array of data to map to a DTO.
     *
     * @return mixed The constructed DTO object.
     */
    abstract protected function buildDto(array $data): mixed;
}