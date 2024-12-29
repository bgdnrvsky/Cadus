<?php

namespace Cadus\core;

use function Cadus\controllers\responses\error;

class Router {
    private array $routes = [];

    public function addRoute($method, $path, $handler): void {
        $this->routes[] = compact('method', 'path', 'handler');
    }

    public function route($method, $path) {
        foreach ($this->routes as $route) {
            if ($route['method'] === $method && $route['path'] === $path) {
                try {
                    $json = file_get_contents('php://input');
                    $data = json_decode($json, true);
                    return $route['handler']($data);
                } catch (\Exception $e) {
                    return error($e->getMessage());
                }
            }
        }

        return error("Route not found", 404);
    }
}