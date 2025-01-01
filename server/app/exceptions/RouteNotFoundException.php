<?php

namespace Cadus\exceptions;

use Throwable;

/**
 * Class RouteNotFoundException
 *
 * A custom exception used to indicate that a requested route could not be found.
 * This exception is typically thrown by the Router class when no matching route exists for the provided method and path.
 */
class RouteNotFoundException extends \Exception
{
    /**
     * Constructor.
     *
     * @param string $method The HTTP method (e.g., `GET`, `POST`) that was requested.
     * @param string $path The requested path.
     * @param Throwable|null $previous An optional previous exception for exception chaining.
     */
    public function __construct(string $method, string $path, ?Throwable $previous = null)
    {
        parent::__construct(
            "Route " . $path . " for method " . $method . " was not found",
            404,
            $previous
        );
    }
}