// Import Express
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// Using EJS as View Engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Routing url using express
app.get('/', (req, res) => {
  // res.sendFile('./index.html', { root: __dirname });
  const data = {
    nama: 'Ikram Maulana',
    title: 'Halaman Home',
    mahasiswa: [{
        nama: 'Ikram',
        email: 'ikram@gmail.com'
      },
      {
        nama: 'Alia',
        email: 'Alia@gmail.com'
      },
      {
        nama: 'Putri',
        email: 'Putri@gmail.com'
      },
    ],
    layout: 'partials/main-layout'
  }
  res.render('index', data);
});

app.get('/about', (req, res) => {
  const data = {
    title: 'Halaman About',
    layout: 'partials/main-layout'
  }
  res.render('about', data);
});

app.get('/contact', (req, res) => {
  const data = {
    title: 'Halaman Contact',
    layout: 'partials/main-layout'
  }
  res.render('contact', data);
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