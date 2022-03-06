function cetakNama(nama) {
  return `Hi, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: 'Ikram Maulana',
  umur: 21,
  cetakMhs() {
    return `Nama saya ${this.nama} dan saya ${this.umur} tahun.`;
  }
}

class Orang {
  constructor() {
    console.log('Object orang telah dibuat!!!');
  }
}

module.exports = {
  cetakNama,
  PI,
  mahasiswa,
  Orang
};