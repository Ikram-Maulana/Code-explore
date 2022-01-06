<?php 

require_once __DIR__ . "/../vendor/autoload.php";

use Kelompokmsib\Pbo\App\Router;

Router::add('GET', '/', 'HomeController', 'index');
Router::add('GET', '/about', 'HomeController', 'about');
Router::run();

?>