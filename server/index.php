<?php

use Cadus\controllers\AuthenticationController;
use Cadus\core\DependencyInjection;
use Cadus\core\Router;
use Cadus\repositories\impl\mariadb\MariaDBMemberRepository;
use Cadus\services\impl\AuthenticationServiceImpl;

$injector = new DependencyInjection();

//
// 1. Setup dependency injections
//
$injector->set('member-repository', function () {
    return new MariaDBMemberRepository();
});

$injector->set('auth-service', function($d) {
    return new AuthenticationServiceImpl($d->get('member-repository'));
});

$injector->set('auth-controller', function($d) {
    return new AuthenticationController($d->get('auth-service'));
});

//
// 2. Setup routes to controllers
//
$router = new Router();

$router->addRoute('POST', '/signup', function() use ($injector) {
    $controller = $injector->get('auth-controller');
    $controller->register();
});

$router->addRoute('POST', '/signin', function() use ($injector) {
    $controller = $injector->get('auth-controller');
    $controller->login();
});

//
// 3. Dispatch HTTP requests to controllers
//
$router->route($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);