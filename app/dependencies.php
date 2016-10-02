<?php

$container = $app->getContainer();

$providers = [
    Projek\Slim\PlatesProvider::class
];

foreach ($providers as $provider) {
    $container->register(new $provider);
}
