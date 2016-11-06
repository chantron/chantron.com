<?php namespace Chantron\Providers;

use Pimple\Container;
use Chantron\Contracts\Provider;

class NotFoundProvider extends Provider
{
    public function register(Container $container)
    {
        $container['notAllowedHandler'] = function ($container) {
            return function ($request, $response, $methods) use ($container) {
                return $container['view']->render($response, '/errors/not-allowed.twig');
            };
        };
    }
}
