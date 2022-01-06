<?php 

require_once __DIR__ . "/../vendor/autoload.php";

use Kelompokmsib\Pbo\App\Router;
use Kelompokmsib\Pbo\Controller\HomeController;
use Kelompokmsib\Pbo\Controller\ProductController;

Router::add('GET', '/products/([0-9a-zA-Z]*)/categories/([0-9a-zA-Z]*)', ProductController::class, 'categories');

Router::add('GET', '/', HomeController::class, 'index');
Router::add('GET', '/about', HomeController::class, 'about');
Router::run();

?>