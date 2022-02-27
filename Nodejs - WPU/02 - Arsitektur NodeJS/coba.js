// Synchronous Javascript

const getUserSync = (id) => {
  // let nama = '';
  // if (id === 1) {
  //   nama = 'Ikram';
  // } else {
  //   nama = 'Maulana';
  // }
  const nama = id === 1 ? 'Ikram' : 'Maulana';
  return {
    id,
    nama
  };
};

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = 'Hello World';
console.log(halo);