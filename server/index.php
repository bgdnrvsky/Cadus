<?php

use Cadus\controllers\AccountController;
use Cadus\controllers\AuthenticationController;
use Cadus\controllers\SurveyController;
use Cadus\core\DIContainer;
use Cadus\core\ResponseEntity;
use Cadus\core\Router;
use Cadus\repositories\IMemberRepository;
use Cadus\repositories\impl\mariadb\MariaDBMemberRepository;
use Cadus\repositories\impl\mariadb\MariaDBSurveyRepository;
use Cadus\repositories\ISurveyRepository;
use Cadus\services\IAccountService;
use Cadus\services\IAuthenticationService;
use Cadus\services\impl\AccountServiceImpl;
use Cadus\services\impl\AuthenticationServiceImpl;
use Cadus\services\impl\SurveyServiceImpl;
use Cadus\services\ISurveyService;

require_once 'vendor/autoload.php';

header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit;
}


//
// 1. Setup dependencies injection
//
$container = new DIContainer();
$container->bind(IMemberRepository::class, fn() => new MariaDBMemberRepository());
$container->bind(ISurveyRepository::class, fn() => new MariaDBSurveyRepository());

$container->bind(IAuthenticationService::class, fn($c) => new AuthenticationServiceImpl($c->get(IMemberRepository::class)));
$container->bind(ISurveyService::class, fn($c) => new SurveyServiceImpl($c->get(ISurveyRepository::class)));
$container->bind(IAccountService::class, fn($c) => new AccountServiceImpl($c->get(IMemberRepository::class)));

$container->bind(AuthenticationController::class, fn($c) => new AuthenticationController($c->get(IAuthenticationService::class)));
$container->bind(SurveyController::class, fn($c) => new SurveyController($c->get(ISurveyService::class), $c->get(IAuthenticationService::class)));
$container->bind(AccountController::class, fn($c) => new AccountController($c->get(IAccountService::class)));

//
// 2. Setup routes to controllers
//
$router = new Router($container);

try {
    $router->registerController(AuthenticationController::class);
    $router->registerController(SurveyController::class);
    $router->registerController(AccountController::class);
} catch (ReflectionException $e) {
    $response = ResponseEntity::error("Internal server error");
    $response->send();
    die;
}

//
// 3. Dispatch HTTP request
//
$response = $router->dispatch($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);
$response->send();