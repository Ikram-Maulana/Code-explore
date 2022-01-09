<?php 

namespace Kelompokmsib\Pbo\Controller;

class ProductController {
  function categories(string $productId, string $categoryId): void {
    echo "Product $productId, CATEGORY $categoryId";
  }
}

?>