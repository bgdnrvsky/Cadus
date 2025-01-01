<?php

namespace Cadus\repositories;

use PDO;
use PDOException;

/**
 * Class PdoSingleton
 *
 * Implements the Singleton pattern to provide a single instance of the PDO database connection
 * throughout the application. This class ensures that only one PDO object is created, allowing
 * for efficient database interactions and centralized management of the connection.
 */
final class PdoSingleton
{
    /**
     * @var PdoSingleton|null The single instance of the PdoSingleton class.
     */
    private static ?PdoSingleton $instance = null;

    /**
     * @var PDO The PDO used for database operations.
     */
    private PDO $pdo;

    /**
     * Private constructor to prevent direct instantiation of the class.
     * Initializes the PDO object using environment variables for the database credentials.
     *
     * @throws PDOException If there is an error while establishing the database connection.
     */
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

        $this->pdo = new PDO(
            $dsn,
            $login,
            $passw,
            $options
        );
    }

    /**
     * Returns the PDO instance.
     *
     * @return PDO The PDO instance for executing database queries.
     */
    public function getPDO(): PDO
    {
        return $this->pdo;
    }

    /**
     * Prevents the object from being cloned.
     */
    private function __clone() {}

    /**
     * Returns the single instance of the PdoSingleton class.
     * If the instance doesn't exist yet, it is created.
     *
     * @return PdoSingleton The single instance of the class.
     */
    public static function getInstance(): PdoSingleton {
        if (self::$instance === null) {
            self::$instance = new self();
        }

        return self::$instance;
    }
}