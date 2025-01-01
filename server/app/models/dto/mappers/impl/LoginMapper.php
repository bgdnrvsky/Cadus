<?php

namespace Cadus\models\dto\mappers\impl;

use Cadus\models\dto\CredentialsDto;

/**
 * Class LoginMapper
 *
 * A concrete implementation of the AbstractArrayDtoMapper class, responsible for mapping an array of data
 * to a CredentialsDto. This class specifies the expected keys and builds the CredentialsDto object from the input data.
 */
class LoginMapper extends AbstractArrayDtoMapper
{
    /**
     * Gets the expected keys for the data array.
     *
     * This method specifies the required fields for mapping an array of data to the CredentialsDto.
     *
     * @return array An array containing the names of the expected fields: 'login-email' and 'login-password'.
     */
    protected function expectedKeys(): array
    {
        return [
            'login-email',
            'login-password',
        ];
    }

    /**
     * Builds a CredentialsDto from the given data array.
     *
     * This method constructs a CredentialsDto object using the values from the input data array.
     *
     * @param array $data The array containing the data to map to a CredentialsDto.
     *
     * @return CredentialsDto The mapped CredentialsDto object.
     */
    protected function buildDto(array $data): CredentialsDto
    {
        return new CredentialsDto(
            $data['login-email'],
            $data['login-password'],
        );
    }
}