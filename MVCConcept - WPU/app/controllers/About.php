<?php 

class About {
  public function index($nama = 'Ikram', $pekerjaan = 'Mahasiswa') {
    echo "Halo, nama saya $nama, saya adalah seorang $pekerjaan";
  }
  
  public function page() {
    echo 'about/page';
  }
}

?>