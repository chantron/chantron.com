<?php namespace Chantron\Contracts;

use Slim\App as Slim;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

abstract class Middleware
{
    public function __construct(Slim $app)
    {
        $this->app = $app;
        $this->container = $app->getContainer();
    }

    public function __invoke(Request $request, Response $response, $next)
    {
        return $response;
    }
}
