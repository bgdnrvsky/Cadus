<?php

namespace Cadus\models\dto\mappers\impl;

use Cadus\exceptions\DtoMissingField;
use Cadus\models\dto\mappers\IArrayDtoMapper;

abstract class AbstractArrayDtoMapper implements IArrayDtoMapper
{
    public function map(array $data) {
        $missingKeys = array_diff($this->expectedKeys(), array_keys($data));

        if (!empty($missingKeys)) {
            throw new DtoMissingField($missingKeys);
        }

        return $this->buildDto($data);
    }

    abstract protected function expectedKeys(): array;

    abstract protected function buildDto(array $data) ;
}