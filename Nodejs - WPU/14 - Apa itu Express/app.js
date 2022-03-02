// Import Express
const express = require('express');
const app = express();
const port = 3000;

// Routing url using express
app.get('/', (req, res) => {
  // res.send('Hello World!');

  //! Mengembalikan nilai json
  // res.json({
  //   name: 'Ikram Maulana',
  //   email: 'ikram@gmail.com',
  //   noHp: '085156590021'
  // });

  //! Mengembalikan nilai html
  res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  //! Mengembalikan nilai html
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
  //! Mengembalikan nilai html
  res.sendFile('./contact.html', { root: __dirname });
});

app.get('/produk/:id', (req, res) => {
  res.send(`
  <h1>Produk dengan id ${req.params.id}</h1>
  <h1>Kategori: ${req.query.kategori}</h1>`);
});

// Middleware using Express, menangkap param yang tidak ada di url
app.use('/', (req, res) => {
  // add 404 response status
  res.status(404);
  res.send('<h1>404</h1>');
});

// Listen port using express
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});