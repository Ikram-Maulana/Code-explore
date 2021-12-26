<div class="container mt-5">
  <div class="row">
    <div class="col-6">
      <!-- Button Trigger Modal -->
      <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#formModal">
        Tambah Data Mahasiswa
      </button>

      <h3>Daftar Mahasiswa</h3>

      <ul class="list-group">
        <?php foreach($data['mhs'] as $mhs) : ?>
        <li class="list-group-item d-flex justify-content-between align-items-center"><?= $mhs['nama']; ?> <a
            class="badge bg-primary" href="<?= BASEURL; ?>/mahasiswa/detail/<?= $mhs['id']; ?>">detail</a></li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="judulModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="judulModal">Tambah Data Mahasiswa</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <form action="<?= BASEURL; ?>/mahasiswa/tambah" method="POST">
          <div class="mb-3">
            <label for="nama" class="form-label">Nama</label>
            <input type="text" class="form-control" id="nama" name="nama">
          </div>

          <div class="mb-3">
            <label for="nim" class="form-label">NIM</label>
            <input type="number" class="form-control" id="nim" name="nim">
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email">
          </div>

          <div class="mb-3">
            <label for="jurusan" class="form-label">Jurusan</label>
            <select class="form-select" aria-label="jurusan" id="jurusan" name="jurusan">
              <option value="Teknik Informatika">Teknik Informatika</option>
              <option value="Administrasi Bisnis">Administrasi Bisnis</option>
              <option value="Akuntansi">Akuntansi</option>
            </select>
          </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Tambah Data</button>
        </form>
      </div>
    </div>
  </div>
</div>