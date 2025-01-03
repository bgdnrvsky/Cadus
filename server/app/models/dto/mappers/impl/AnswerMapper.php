<?php

namespace Cadus\models\dto\mappers\impl;

use Cadus\models\dto\AnswerDto;

/**
 * Class AnswerMapper
 *
 * A concrete implementation of the AbstractArrayDtoMapper class, responsible for mapping an array of data
 * to an AnswerDto. This class specifies the expected keys and builds the AnswerDto object from the input data.
 */
class AnswerMapper extends AbstractArrayDtoMapper
{
    /**
     * Gets the expected keys for the data array.
     *
     * This method specifies the required fields for mapping an array of data to the AnswerDto.
     *
     * @return array An array containing the names of the expected fields: "question" and "answer".
     */
    protected function expectedKeys(): array
    {
        return [
            "question",
            "answer"
        ];
    }

    /**
     * Builds an AnswerDto from the given data array.
     *
     * This method constructs an AnswerDto object using the values from the input data array.
     *
     * @param array $data The array containing the data to map to an AnswerDto.
     *
     * @return AnswerDto The mapped AnswerDto object.
     */
    protected function buildDto(array $data): AnswerDto
    {
        return new AnswerDto(
            $data["question"],
            $data["answer"]
        );
    }
}