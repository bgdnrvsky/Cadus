<?php

namespace Cadus\core;

use Cadus\core\attributes\RequestMapping;
use Cadus\core\attributes\RestController;
use Cadus\exceptions\RouteNotFoundException;
use Exception;
use ReflectionClass;
use ReflectionException;
use ReflectionMethod;

/**
 * Class Router
 *
 * A simple routing system that integrates with a Dependency Injection (DI) container
 * to dynamically resolve controllers and handle HTTP requests.
 * The Router supports attribute-based route definitions using custom attributes
 * like `RestController` and `RequestMapping`.
 */
class Router {

    /**
     * @var array An associative array holding the routes.
     *            The structure is: [$httpMethod => [$path => [dtoMapperClass, controllerClass, methodName]]].
     */
    private array $routes = [];

    /**
     * @var DIContainer The Dependency Injection container used to resolve controller instances.
     */
    private DIContainer $container;

    /**
     * Constructor.
     *
     * @param DIContainer $container An instance of the DIContainer to resolve dependencies.
     */
    public function __construct(DIContainer $container) {
        $this->container = $container;
    }

    /**
     * Registers a controller and its routes based on attributes.
     *
     * This method uses PHP's Reflection API to introspect the provided controller class.
     * It identifies routes defined via the `RequestMapping` attribute and associates them
     * with their corresponding HTTP methods, paths, and handler methods.
     *
     * @param string $controllerClass The fully qualified name of the controller class to register.
     *
     * @return void
     * @throws ReflectionException
     */
    public function registerController(string $controllerClass): void
    {
        $reflector = new ReflectionClass($controllerClass);

        $baseRoute = '';

        // Check for the optional RestController attribute to set the base route
        $attributes = $reflector->getAttributes(RestController::class);

        if (!empty($attributes)) {
            $baseRoute = $attributes[0]->newInstance()->getPath();
        }

        // Register methods annotated with RequestMapping
        foreach ($reflector->getMethods(ReflectionMethod::IS_PUBLIC) as $method) {
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

    /**
     * Dispatches an incoming HTTP request to the appropriate route.
     *
     * Resolves the controller via the DI container, invokes the appropriate method, and handles
     * optional data transformation via a DTO mapper class if specified.
     *
     * @param string $httpMethod The HTTP method of the request (e.g., GET, POST).
     * @param string $path The requested path.
     *
     * @return ResponseEntity The response entity returned by the controller.
     */
    public function dispatch(string $httpMethod, string $path): ResponseEntity {
        try {
            $httpMethod = strtoupper($httpMethod);
            $path = strtok($path, '?');

            if (isset($this->routes[$httpMethod][$path])) {
                [$mapperClass, $controllerClass, $method] = $this->routes[$httpMethod][$path];

                $controller = $this->container->get($controllerClass);

                // The endpoint does not accept data, call it directly
                if ($mapperClass === null) {
                    return $controller->{$method}();
                }

                $data = [];

                if ($httpMethod === 'POST') {
                    $json = file_get_contents('php://input');
                    $data = json_decode($json, true);
                } else if ($httpMethod === 'GET') {
                    $data = $_GET;
                }

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