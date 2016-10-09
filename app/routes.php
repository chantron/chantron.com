<?php

$app->get('/', 'Chantron\Controllers\HomeController:index')->setName('home');
$app->get('/about', 'Chantron\Controllers\HomeController:index')->setName('home');
$app->get('/contact', 'Chantron\Controllers\HomeController:index')->setName('home');
$app->get('/skills', 'Chantron\Controllers\HomeController:index')->setName('home');
