<?php

namespace Cadus\models\dto\mappers;

/**
 * Interface IArrayDtoMapper
 *
 * Defines a contract for mapping an array of data to a Data Transfer Object (DTO).
 * Any class implementing this interface should provide a method for converting an associative array into a DTO object.
 */
interface IArrayDtoMapper
{
    /**
     * Maps an array of data to a DTO.
     *
     * This method is responsible for transforming an associative array of data into a specific Data Transfer Object (DTO).
     * The mapping process involves converting data types or formatting values to align with the DTO's structure.
     *
     * @param array $data The array of data to be mapped to a DTO.
     *
     * @return mixed The mapped DTO object, an instance of a class representing the data structure.
     */
    public function map(array $data): mixed;
}