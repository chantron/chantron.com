<?php

$container = $app->getContainer();

foreach ($container['providers'] as $provider) {
    $container->register(new $provider);
}
