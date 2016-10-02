<?php

// To help the built-in PHP dev server, check if the request was actually for
// something which should probably be served as a static file
if (PHP_SAPI === 'cli-server' && $_SERVER['SCRIPT_FILENAME'] !== __FILE__) {
    return false;
}

require_once __DIR__ . '/../vendor/autoload.php';

$env = new Dotenv\Dotenv(dirname(__DIR__));
$env->load();

session_start();

$settings = require_once __DIR__ . '/../app/settings.php';

$app = new \Slim\App($settings);

require_once __DIR__ . '/../app/dependencies.php';
require_once __DIR__ . '/../app/middleware.php';
require_once __DIR__ . '/../app/routes.php';
require_once __DIR__ . '/../app/functions.php';

$app->run();
