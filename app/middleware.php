<?php

foreach ($container['middleware'] as $middleware) {
    $app->add(new $middleware($app));
}
