<?php

use Cadus\controllers\AuthenticationController;
use Cadus\core\DependencyInjection;
use Cadus\core\Router;
use Cadus\repositories\impl\mariadb\MariaDBMemberRepository;
use Cadus\services\impl\AuthenticationServiceImpl;

require_once 'vendor/autoload.php';

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

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

$router->addRoute('POST', '/signup', function($data) use ($injector) {
    $controller = $injector->get('auth-controller');
    return $controller->register($data);
});

$router->addRoute('POST', '/signin', function($data) use ($injector) {
    $controller = $injector->get('auth-controller');
    return $controller->login($data);
});

//
// 3. Dispatch HTTP requests to controllers
//
echo $router->route($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);