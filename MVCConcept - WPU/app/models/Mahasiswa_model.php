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

  public function tambahDataMahasiswa($data) {
    $query = "INSERT INTO mahasiswa VALUES (NULL, :nama, :nim, :email, :jurusan)";
    
    $this->db->query($query);
    $this->db->bind('nama', $data['nama']);
    $this->db->bind('nim', $data['nim']);
    $this->db->bind('email', $data['email']);
    $this->db->bind('jurusan', $data['jurusan']);
    
    $this->db->execute();
    return $this->db->rowCount();
  }

  public function hapusDataMahasiswa($id) {
    $query = "DELETE FROM mahasiswa WHERE id = :id";
    $this->db->query($query);
    $this->db->bind('id', $id);

    $this->db->execute();
    return $this->db->rowCount();
  }
}

?>