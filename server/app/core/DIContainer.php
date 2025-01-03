<?php

namespace Cadus\core;

use Exception;

/**
 * Class DIContainer
 *
 * A simple Dependency Injection (DI) container for managing dependencies and their resolutions.
 * This class allows you to bind interfaces or classes to specific implementations or factory methods
 * and retrieve instances of these dependencies.
 */
class DIContainer
{
    /**
     * @var array Holds the bindings between interfaces or classes and their corresponding factory methods.
     */
    private array $bindings = [];

    /**
     * Binds an interface or class to a factory method.
     *
     * This method allows you to specify how a dependency should be resolved when requested.
     *
     * @param string $interface The name of the interface or class to bind.
     * @param callable $getInjected A factory function that defines how the dependency should be created.
     *                              The callable receives the current DIContainer instance as its argument so it can
     *                              chain dependencies.
     *
     * @return void
     */
    public function bind(string $interface, callable $getInjected): void
    {
        $this->bindings[$interface] = $getInjected;
    }

    /**
     * Retrieves an instance of the requested interface or class.
     *
     * This method resolves a dependency using the factory method defined in the `bind` method.
     * If the dependency is not bound, an exception is thrown.
     *
     * @param string $dependency The name of the interface or class to resolve.
     *
     * @return mixed The resolved instance of the requested dependency.
     *
     * @throws Exception If the requested dependency is not bound.
     */
    public function get(string $dependency): mixed
    {
        if (isset($this->bindings[$dependency])) {
            return $this->bindings[$dependency]($this);
        }

        throw new Exception("Dependency '$dependency' was never bound.");
    }
}