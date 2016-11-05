<?php

$app->get('/', 'Chantron\Controllers\HomeController:index')->setName('home');
$app->get('/about', 'Chantron\Controllers\HomeController:index');
$app->get('/contact', 'Chantron\Controllers\HomeController:index');
$app->get('/skills', 'Chantron\Controllers\HomeController:index');
$app->post('/messages', 'Chantron\Controllers\Mailer:send');
