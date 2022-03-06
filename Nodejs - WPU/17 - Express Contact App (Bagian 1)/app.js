// Import Express
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const {
  loadContact,
  findContact
} = require('./utils/contacts');

const app = express();
const port = 3000;

// Using EJS as View Engine
app.set('view engine', 'ejs');
// Third-party Middleware
app.use(expressLayouts);
// Express.static Middleware
app.use(express.static('public'));

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
    layout: 'partials/main-layout',
    contacts: loadContact()
  }
  res.render('contact', data);
});

app.get('/contact/:nama', (req, res) => {
  const data = {
    title: 'Halaman Detail Contact',
    layout: 'partials/main-layout',
    contact: findContact(req.params.nama)
  }
  res.render('detail', data);
});

// Middleware using Express, menangkap param yang tidak ada di url
app.use((req, res) => {
  // add 404 response status
  res.status(404);
  res.send('<h1>404</h1>');
});

// Listen port using express
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});