<?php

namespace Cadus\repositories;


use PDO;

/**
 * Class AbstractRepository
 *
 * A base class for all repository classes that interact with the database using PDO. This abstract class
 * is designed to provide a shared PDO connection for all repository classes by utilizing the PdoSingleton
 * class. It ensures that child classes have access to the database connection without needing to manage it
 * themselves.
 */
abstract class AbstractRepository
{
    /**
     * @var PDO The PDO instance used for executing database queries.
     */
    protected PDO $pdo;

    /**
     * AbstractRepository constructor.
     *
     * Initializes the repository by acquiring the PDO instance from the PdoSingleton.
     * This constructor ensures that the repository has access to the shared PDO connection.
     */
    public function __construct() {
        $this->pdo = PdoSingleton::getInstance()->getPDO();
    }
}