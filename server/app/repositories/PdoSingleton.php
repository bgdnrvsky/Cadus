<?php

namespace Cadus\repositories;

use PDO;

final class PdoSingleton
{
    private static ?PdoSingleton $instance = null;

    private \PDO $pdo;

    private function __construct() {
        $host = getenv("CADUS_DB_HOST");
        $name = getenv("CADUS_DB_NAME");
        $login = getenv("CADUS_DB_USERNAME");
        $passw = getenv("CADUS_DB_PASSWORD");

        $dsn = "mysql:host=$host;dbname=$name";

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

    public function getPDO(): \PDO {
        return $this->pdo;
    }

    private function __clone() {}

    public static function getInstance(): PdoSingleton {
        if (self::$instance === null) {
            self::$instance = new self();
        }

        return self::$instance;
    }
}