// Import Express
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const {
  body,
  validationResult,
  check
} = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const {
  loadContacts,
  findContact,
  addContact,
  cekDuplikat
} = require('./utils/contacts');

const app = express();
const port = 3000;

// Using EJS as View Engine
app.set('view engine', 'ejs');
// Third-party Middleware
app.use(expressLayouts);
// Express.static Middleware
app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true
}));

// Configure Flash
app.use(cookieParser('secret'));
app.use(session({
  cookie: {
    maxAge: 60000
  },
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());

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
    contacts: loadContacts(),
    msg: req.flash('msg')
  }
  res.render('contact', data);
});

app.get('/contact/add', (req, res) => {
  const data = {
    title: 'Form Tambah Data Contact',
    layout: 'partials/main-layout'
  }
  res.render('add-contact', data);
});

// Process Contact Data
app.post('/contact', [
  check('email', 'Email tidak valid!').isEmail(),
  check('nohp', 'No HP tidak valid!').isMobilePhone('id-ID'),
  body('nama').custom((value) => {
    const duplikat = cekDuplikat(value);
    if (duplikat) {
      throw new Error('Nama sudah terdaftar!');
    }
    return true;
  })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // return res.status(400).json({
    //   errors: errors.array()
    // });
    const data = {
      title: 'Form Tambah Data Contact',
      layout: 'partials/main-layout',
      errors: errors.array()
    }
    res.render('add-contact', data);
  } else {
    addContact(req.body);
    // Send flash message
    req.flash('msg', 'Data berhasil ditambahkan!');
    res.redirect('/contact');
  }
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