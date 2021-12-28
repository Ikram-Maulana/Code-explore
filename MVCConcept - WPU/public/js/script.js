$(function() {

  $('.tombolTambahData').on('click', function() {
    $('#judulModal').html('Tambah Data Mahasiswa');
    $('.modal-footer button[type=submit]').html('Tambah Data');
  })
  
  $('.tampilModalUbah').on('click', function () {
    $('#judulModal').html('Ubah Data Mahasiswa');
    $('.modal-footer button[type=submit]').html('Ubah Data');
    const id = $(this).data('id');
    $('.modal-body form').attr('action', 'http://localhost/Code-Explore/MVCConcept%20-%20WPU/public/mahasiswa/ubah');
    
    $.ajax({
      url: 'http://localhost/Code-Explore/MVCConcept%20-%20WPU/public/mahasiswa/getUbah',
      data: {id: id},
      method: 'post',
      dataType: 'json',
      success: function(data) {
        $('#nama').val(data.nama);
        $('#nim').val(data.nim);
        $('#email').val(data.email);
        $('#jurusan').val(data.jurusan);
        $('#id').val(data.id);
      }
    })
  });

});

// document.addEventListener('DOMContentLoaded', () => {

//   const modalUbah = document.querySelector('.tampilModalUbah');
//   const ubahData = document.querySelectorAll('.ubahData');
//   const modalTambah = document.querySelector('.tombolTambahData');
//   const judulModal = document.querySelector('#judulModal');
//   const modalFooterBtn = document.querySelector('[type="submit"]');

//   modalTambah.addEventListener('click', function () {
//     judulModal.innerHTML = 'Tambah Data Mahasiswa';
//     modalFooterBtn.innerHTML = 'Tambah Data';
//   });

//   // modalUbah.addEventListener('click', function () {
//   //   judulModal.innerHTML = 'Ubah Data Mahasiswa';
//   //   modalFooterBtn.innerHTML = 'Ubah Data';

//   //   const id = this.getAttribute("data-id");
//   //   console.log(id);
//   // });
  
//   ubahData.forEach(element => {
//     element.addEventListener('click', function() {
//       judulModal.innerHTML = 'Ubah Data Mahasiswa';
//       modalFooterBtn.innerHTML = 'Ubah Data';
//       const id = this.getAttribute('data-id');
//       console.log(id);
//     })
//   });

// });