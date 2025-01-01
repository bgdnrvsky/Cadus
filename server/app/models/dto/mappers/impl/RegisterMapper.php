<?php

namespace Cadus\models\dto\mappers\impl;

use Cadus\models\dto\RegisterDto;

/**
 * Class RegisterMapper
 *
 * A concrete implementation of the AbstractArrayDtoMapper class, responsible for mapping an array of data
 * to a RegisterDto. This class specifies the expected keys and builds the RegisterDto object from the input data.
 */
class RegisterMapper extends AbstractArrayDtoMapper
{
    /**
     * Gets the expected keys for the data array.
     *
     * This method specifies the required fields for mapping an array of data to the RegisterDto.
     *
     * @return array An array containing the names of the expected fields: 'register-email', 'register-password',
     *               'register-password-confirm', and 'accept-terms'.
     */
    protected function expectedKeys(): array
    {
        return [
            'register-email',
            'register-password',
            'register-password-confirm',
            'accept-terms',
        ];
    }

    /**
     * Builds a RegisterDto from the given data array.
     *
     * This method constructs a RegisterDto object using the values from the input data array.
     *
     * @param array $data The array containing the data to map to a RegisterDto.
     *
     * @return RegisterDto The mapped RegisterDto object.
     */
    protected function buildDto(array $data): RegisterDto
    {
        return new RegisterDto(
            $data['register-email'],
            $data['register-password'],
            $data['register-password-confirm'],
            $data['accept-terms'],
        );
    }
}