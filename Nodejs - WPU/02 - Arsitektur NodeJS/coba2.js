// Asynchronous Javascript

const getUser = (id, callback) => {
  const time = id === 1 ? 3000 : 2000;
  setTimeout(() => {
    const nama = id === 1 ? 'Ikram' : 'Maulana';
    callback({id, nama});
  }, time);
};

// Ketika hasil callback di atas selesai dijalankan di line 7, maka kita parsing data ke callback user dan callbacknya mau kita apakan di line 13, misalnya akan kita console.log.
const userSatu = getUser(1, (user) => {
  console.log(user);
});

const userDua = getUser(2, (user) => {
  console.log(user);
});

const halo = 'Hello World';
console.log(halo);