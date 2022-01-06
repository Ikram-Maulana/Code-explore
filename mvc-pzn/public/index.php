<?php 

// Default
$path = "/index";

// Cek
if(isset($_SERVER['PATH_INFO'])) {
  $path = $_SERVER['PATH_INFO'];
}

// Load file
require __DIR__ . '/../app/View'. $path .'.php'; 

?>