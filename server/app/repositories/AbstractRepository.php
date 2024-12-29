<?php

namespace Cadus\repositories;


use PDO;

abstract class AbstractRepository
{
    protected \PDO $pdo;

    public function __construct() {
        $dsn = "mysql:host=mariadb.nicoems.ovh;dbname=SAEJB";
        $login = "JB";
        $passw = "o5rt+9oi";

        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ];

        $this->pdo = new \PDO(
            $dsn,
            $login,
            $passw,
            $options
        );
    }
}