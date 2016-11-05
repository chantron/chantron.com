<?php namespace Chantron\Contracts;

use Interop\Container\ContainerInterface;

abstract class Controller
{
    protected $container;
    protected $view;
    protected $request;
    protected $response;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
        $this->request = $container->get('request');
        $this->response = $container->get('response');
        $this->view = $container->get('view');
        $this->mail = $container->get('mail');
    }

    protected function redirect($url)
    {
        return $this->response->withStatus(302)->withHeader('Location', $url);
    }

    protected function view($template, $data = [])
    {
        return $this->view->render($this->response, $template, $data);
    }

    protected function json($data, $status = 200)
    {
        return $this->response->withJSON($data)->withStatus($status);
    }

}
