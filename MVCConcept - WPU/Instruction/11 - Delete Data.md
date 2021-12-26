<!-- Instruction for Delete Data -->

1. First of all tambahkan button delete disamping detail
`<a  class="badge bg-danger ms-1"  href="<?= BASEURL; ?>/mahasiswa/hapus/<?= $mhs['id']; ?>" onclick="return confirm('yakin?');">hapus</a>`
2. Ke file Mahasiswa.php tambahkan function hapus samakan isinya dengan fuction tambah, yang dirubah hanya `setFlash`, `tambahDataMahasiswa($_POST)` menjadi `hapusDataMahasiswa($id)` dan set paramnya dengan `$id`
3. Ke Mahasiswa_model.php tambahkan function hapusDataMahasiswa, tambahkan kode
`public  function hapusDataMahasiswa($id) {`
`$query = "DELETE FROM mahasiswa WHERE id = :id";`
`$this->db->query($query);`
`$this->db->bind('id', $id);`
`$this->db->execute();`
`return  $this->db->rowCount();`
`}`