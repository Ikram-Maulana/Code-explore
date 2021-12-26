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
  private $table = 'mahasiswa';
  private $db;

  public function __construct() {
    $this->db = new Database;
  }

  public function getAllMahasiswa() {
    // return $this->mhs;
    $this->db->query('SELECT * FROM ' . $this->table);
    return $this->db->resultSet();
  }

  public function getMahasiswaById($id) {
    $this->db->query('SELECT * FROM ' . $this->table . ' WHERE id=:id');
    $this->db->bind('id', $id);
    return $this->db->single();
  }
}

?>