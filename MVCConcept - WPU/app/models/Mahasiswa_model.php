<?php 

class Mahasiswa_model {
  // private $mhs = [
  //   [
  //     "nama" => "Ikram Maulana",
  //     "nim" => 1930511075,
  //     "email" => "ikram_maulana@onedrive.web.id",
  //     "jurusan" => "Teknik Informatika"
  //   ],
  //   [
  //     "nama" => "AA",
  //     "nim" => 1930987654,
  //     "email" => "aa@onedrive.web.id",
  //     "jurusan" => "Administrasi Bisnis"
  //   ],
  // ];

  // ! Konek Database
  // Database Handler
  private $dbh;
  private $stmt;

  public function __construct() {
    // Data Source Name
    $dsn = 'mysql:host=localhost;dbname=codelab_phpmvc';
    try {
      $this->dbh = new PDO($dsn, 'root', '');
    } catch(PDOException $e) {
      die($e->getMessage());
    }
  }

  public function getAllMahasiswa() {
    // return $this->mhs;
    $this->stmt = $this->dbh->prepare('SELECT * from mahasiswa');
    $this->stmt->execute();
    return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}

?>