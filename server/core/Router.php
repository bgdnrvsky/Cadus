<?php

namespace Cadus\core;

class Router {
    private array $routes = [];

    public function addRoute($method, $path, $handler) {
        $this->routes[] = compact('method', 'path', 'handler');
    }

    public function route($method, $path) {
        foreach ($this->routes as $route) {
            if ($route['method'] === $method && $route['path'] === $path) {
                return $route['handler']();
            }
        }

        http_response_code(404);
        echo "Not Found";
    }
}