<?php

namespace Cadus\exceptions;

class RouteNotFoundException extends \Exception
{
    public function __construct(string $method, string $path, ?Throwable $previous = null)
    {
        parent::__construct(
            "Route " . $path . " for method " . $method . " was not found",
            404,
            $previous
        );
    }
}