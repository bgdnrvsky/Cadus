<?php

namespace Cadus\core;

use Cadus\core\attributes\RequestMapping;
use Cadus\core\attributes\RestController;
use Cadus\exceptions\RouteNotFoundException;
use Exception;

class Router {
    private array $routes = [];

    private DIContainer $container;

    public function __construct(DIContainer $container) {
        $this->container = $container;
    }

    public function registerController(string $controllerClass): void
    {
        $reflector = new \ReflectionClass($controllerClass);

        $baseRoute = '';

        $attributes = $reflector->getAttributes(RestController::class);

        if (!empty($attributes)) {
            $baseRoute = $attributes[0]->newInstance()->getPath();
        }

        foreach ($reflector->getMethods(\ReflectionMethod::IS_PUBLIC) as $method) {
            foreach ($method->getAttributes(RequestMapping::class) as $attribute) {
                $mapping = $attribute->newInstance();

                $this->routes[$mapping->getHttpMethod()][$baseRoute . $mapping->getPath()] = [
                    $mapping->getDtoMapperName(),
                    $controllerClass,
                    $method->getName()
                ];
            }
        }
    }

    public function dispatch(string $httpMethod, string $path): ResponseEntity {
        try {
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
        } catch (Exception $e) {
            return ResponseEntity::error($e->getMessage(), $e->getCode());
        }
    }
}