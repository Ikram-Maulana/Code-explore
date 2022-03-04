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
  cekDuplikat,
  deleteContact,
  updateContacts
} = require('./utils/contacts');
const { response } = require('express');

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

// Process delete contact
app.get('/contact/delete/:nama', (req, res) => {
  const contact = findContact(req.params.nama);
  if (!contact) {
    res.status(404).send('<h1>404</h1>');
  } else {
    deleteContact(req.params.nama);
    req.flash('msg', 'Data contact berhasil dihapus!');
    res.redirect('/contact');
  }
});

// Form Change Data Contact
app.get('/contact/edit/:nama', (req, res) => {
  const contact = findContact(req.params.nama);
  if (!contact) {
    res.status(404).send('<h1>404</h1>');
  } else {
    const data = {
      title: 'Form Ubah Data Contact',
      layout: 'partials/main-layout',
      contact
    }
    res.render('edit-contact', data);
  }
});

// Change Data Contact Process
app.post('/contact/update', [
  check('email', 'Email tidak valid!').isEmail(),
  check('nohp', 'No HP tidak valid!').isMobilePhone('id-ID'),
  body('nama').custom((value, {req}) => {
    const duplikat = cekDuplikat(value);
    if (value !== req.body.oldNama && duplikat) {
      throw new Error('Nama sudah terdaftar!');
    }
    return true;
  })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const data = {
      title: 'Form Ubah Data Contact',
      layout: 'partials/main-layout',
      errors: errors.array(),
      //! Jika error tetap ada isi di kolom inputnya
      contact: req.body
    }
    res.render('edit-contact', data);
  } else {
    updateContacts(req.body);
    // Send flash message
    req.flash('msg', 'Data berhasil diubah!');
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