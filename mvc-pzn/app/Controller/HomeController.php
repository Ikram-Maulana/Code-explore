<?php 

namespace Kelompokmsib\Pbo\Controller;

class HomeController {
  function index(): void {
    $model = [
      'title' => "Belajar PHP MVC",
      'content' => "Selamat Belajar"
    ];
    
    echo "HomeController.index()";
  }
  
  function about(): void {
    echo "HomeController.about()";
  }
}

?>