<?php
$debug = getenv('DEBUG');

if ($debug === 'true') {
    $debug = true;
}

if ($debug === 'false') {
    $debug = false;
}

return [
    'settings' => [
        // Slim Settings
        'determineRouteBeforeAppMiddleware' => false,
        'displayErrorDetails' => $debug,
        'debug' => $debug,
        'whoops.editor' => getenv('WHOOPS_EDITOR'),
        // View settings
        'view' => [
            'directory' => '../resources/templates',
            // Path to asset directory (default: null)
            'assetPath' => '/assets/',
            'timestampInFilename' => false,
        ],
        // monolog settings
        'logger' => [
            'name' => 'app',
            'path' => __DIR__ . getenv('LOG_DIR'),
        ],
        'mailgun' => [
            'key' => getenv('MAILGUN_API'),
            'domain' => getenv('MAILGUN_DOMAIN'),
            'to' => getenv('MAILGUN_TO'),
        ],
    ],
    'providers' => [
        Projek\Slim\PlatesProvider::class,
        Chantron\Providers\MailProvider::class,
    ],
];
