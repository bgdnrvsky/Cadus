<?php

namespace Cadus\repositories;

class AbstractRepository
{
    protected \PDO $pdo;

    public function __construct() {
        $dsn = "";
        $login = "";
        $passw = "";

        $this->pdo = new \PDO(
            $dsn,
            $login,
            $passw
        );
    }
}