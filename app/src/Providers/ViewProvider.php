<?php namespace Chantron\Providers;

class ViewProvider extends Chantron\Contracts\Provider
{

    public function register(Container $container)
    {
        $cache = getenv('TEMPLATE_CACHE_DIR');

        if (getenv('TEMPLATE_CACHE_DIR') === 'false') {
            $cache = false;
        }

        $view = new \Slim\Views\Twig(__DIR__ . '/' . getenv('TEMPLATE_DIR'), [
            'cache' => $cache,
            'debug' => true,
        ]);

        // Instantiate and add Slim specific extension
        $basePath = rtrim(str_ireplace('index.php', '', $c['request']->getUri()->getBasePath()), '/');
        $view->addExtension(new Slim\Views\TwigExtension($c['router'], $basePath));
        $view->addExtension(new Twig_Extension_Debug());

        return $view;
    }

    public function boot()
    {

    }
}
