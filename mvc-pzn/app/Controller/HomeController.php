<?php 

namespace Kelompokmsib\Pbo\Controller;

use Kelompokmsib\Pbo\App\View;

class HomeController {
  function index(): void {
    $model = [
      'title' => "Belajar PHP MVC",
      'content' => "Selamat Belajar Ikram"
    ];
    
    View::render('Home/index', $model);
  }
  
  function about(): void {
    echo "HomeController.about()";
  }
}

?>