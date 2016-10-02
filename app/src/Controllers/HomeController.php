<?php namespace Chantron\Controllers;

use Chantron\Contracts\Controller;
use Slim\Container;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class HomeController extends Controller
{
    public function index(Request $request, Response $response, $args)
    {
        return $this->view->render('index', []);
    }
}
