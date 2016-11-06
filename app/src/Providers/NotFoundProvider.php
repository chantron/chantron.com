<?php namespace Chantron\Providers;

use Pimple\Container;
use Chantron\Contracts\Provider;

class NotAllowedProvider extends Provider
{
    public function register(Container $container)
    {
        $container['notFoundHandler'] = function ($container) {
            return function ($request, $response, $methods) use ($container) {
                return $container['view']->render('/errors/not-found', []);
            };
        };
    }
}
