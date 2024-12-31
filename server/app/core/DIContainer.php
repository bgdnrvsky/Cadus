<?php

namespace Cadus\core;

class DIContainer
{
    private array $bindings = [];

    public function bind(string $interface, callable $getInjected): void
    {
        $this->bindings[$interface] = $getInjected;
    }

    public function get(string $interface)
    {
        if (isset($this->bindings[$interface])) {
            return $this->bindings[$interface]($this);
        }

        throw new \Exception("Dependency '$interface' was never bound.");
    }
}