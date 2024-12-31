<?php

use Cadus\controllers\AuthenticationController;
use Cadus\controllers\SurveyController;
use Cadus\core\DIContainer;
use Cadus\core\Router;
use Cadus\repositories\IMemberRepository;
use Cadus\repositories\impl\mariadb\MariaDBMemberRepository;
use Cadus\repositories\impl\mariadb\MariaDBSurveyRepository;
use Cadus\repositories\ISurveyRepository;
use Cadus\services\IAuthenticationService;
use Cadus\services\impl\AuthenticationServiceImpl;
use Cadus\services\impl\SurveyServiceImpl;
use Cadus\services\ISurveyService;
use function Cadus\controllers\responses\error;

require_once 'vendor/autoload.php';

header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Methods: GET, POST, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

//
// 1. Setup dependencies injection
//
$container = new DIContainer();
$container->bind(IMemberRepository::class, fn() => new MariaDBMemberRepository());
$container->bind(ISurveyRepository::class, fn() => new MariaDBSurveyRepository());

$container->bind(IAuthenticationService::class, fn($c) => new AuthenticationServiceImpl($c->get(IMemberRepository::class)));
$container->bind(ISurveyService::class, fn($c) => new SurveyServiceImpl($c->get(ISurveyRepository::class)));

$container->bind(AuthenticationController::class, fn($c) => new AuthenticationController($c->get(IAuthenticationService::class)));
$container->bind(SurveyController::class, fn($c) => new SurveyController($c->get(ISurveyService::class)));

//
// 2. Setup routes to controllers
//
$router = new Router($container);

$router->registerController(AuthenticationController::class);
$router->registerController(SurveyController::class);

//
// 3. Dispatch HTTP request
//
try {
    echo $router->dispatch($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);
} catch (Exception $e) {
    echo error($e->getMessage(), $e->getCode());
}