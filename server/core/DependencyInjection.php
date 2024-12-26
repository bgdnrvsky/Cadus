<?php

namespace Cadus\core;

class DependencyInjection
{
    private array $dependencies = [];

    public function set($name, $closure): void
    {
        $this->dependencies[$name] = $closure;
    }

    public function get($name) {
        if (isset($this->dependencies[$name])) {
            return $this->dependencies[$name]($this);
        }

        throw new \Exception("Dependency '$name' not found");
    }
}