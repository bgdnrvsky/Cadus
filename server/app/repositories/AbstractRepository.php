<?php

namespace Cadus\repositories;


use PDO;

abstract class AbstractRepository
{
    protected \PDO $pdo;

    public function __construct() {
        $this->pdo = PdoSingleton::getInstance()->getPDO();
    }
}