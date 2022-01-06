<?php 

require_once __DIR__ . "/../vendor/autoload.php";

use Kelompokmsib\Pbo\App\Router;
use Kelompokmsib\Pbo\Controller\HomeController;

Router::add('GET', '/', HomeController::class, 'index');
Router::add('GET', '/about', HomeController::class, 'about');
Router::run();

?>