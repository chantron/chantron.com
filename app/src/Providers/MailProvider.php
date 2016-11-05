<?php namespace Chantron\Providers;

use Pimple\Container;
use Chantron\Contracts\Provider;
use Mailgun\Mailgun;

class MailProvider extends Provider
{
    public function register(Container $container)
    {
        $container['mail'] = new Mailgun($container['settings']['mailgun']['key']);
    }
}
