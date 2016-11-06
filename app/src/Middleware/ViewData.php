<?php namespace Chantron\Middleware;

use Chantron\Contracts\Middleware;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class ViewData extends Middleware
{
    public function __invoke(Request $request, Response $response, $next)
    {
        $this->container->view->addData([
            'trackingId' => $this->container['settings']['trackingId'],
        ]);
        return $next($request, $response);
    }
}
