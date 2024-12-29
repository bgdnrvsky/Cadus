<?php

use Cadus\controllers\AuthenticationController;
use Cadus\controllers\SurveyController;
use Cadus\core\DependencyInjection;
use Cadus\core\Router;
use Cadus\repositories\impl\mariadb\MariaDBMemberRepository;
use Cadus\repositories\impl\mariadb\MariaDBSurveyRepository;
use Cadus\services\impl\AuthenticationServiceImpl;
use Cadus\services\impl\SurveyServiceImpl;

require_once 'vendor/autoload.php';

header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Methods: GET, POST, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');
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

$injector->set('survey-repository', function () {
    return new MariaDBSurveyRepository();
});

$injector->set('survey-service', function($d) {
    return new SurveyServiceImpl($d->get('survey-repository'));
});

$injector->set('survey-controller', function($d) {
    return new SurveyController($d->get('survey-service'));
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

$router->addRoute('GET', '/questions', function($data) use ($injector) {
    $controller = $injector->get('survey-controller');
    return $controller->getQuestions($data);
});

//
// 3. Dispatch HTTP requests to controllers
//
echo $router->route($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);