<?php

namespace Cadus\core;

use Cadus\core\attributes\RequestMapping;
use Cadus\exceptions\RouteNotFoundException;

class Router {
    private array $routes = [];

    private DIContainer $container;

    public function __construct(DIContainer $container) {
        $this->container = $container;
    }

    public function registerController(string $controllerClass): void
    {
        $reflector = new \ReflectionClass($controllerClass);

        foreach ($reflector->getMethods(\ReflectionMethod::IS_PUBLIC) as $method) {
            foreach ($method->getAttributes(RequestMapping::class) as $attribute) {
                $mapping = $attribute->newInstance();

                $this->routes[$mapping->getHttpMethod()][$mapping->getPath()] = [
                    $mapping->getDtoMapperName(),
                    $controllerClass,
                    $method->getName()
                ];
            }
        }
    }

    public function dispatch(string $httpMethod, string $path) {
        $httpMethod = strtoupper($httpMethod);

        if (isset($this->routes[$httpMethod][$path])) {
            [$mapperClass, $controllerClass, $method] = $this->routes[$httpMethod][$path];

            $controller = $this->container->get($controllerClass);

            // The endpoint does not accept data, call it directly
            if ($mapperClass === null) {
                return $controller->{$method}();
            }

            $json = file_get_contents('php://input');
            $data = json_decode($json, true);

            // The endpoint does accept data, map them to the correct object before continuing
            $mapper = new $mapperClass();
            $dto = $mapper->map($data);

            return $controller->{$method}($dto);
        }

        throw new RouteNotFoundException($httpMethod, $path);
    }
}