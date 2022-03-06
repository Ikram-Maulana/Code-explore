const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const {
  body,
  validationResult,
  check
} = require('express-validator');
const methodOverride = require('method-override');

require('./utils/db');
const Contact = require('./model/contact');

const app = express();
const port = 3000;

// Setup Method Override
app.use(methodOverride('_method'));

// Setup EJS
app.set('view engine', 'ejs');
app.use(expressLayouts);
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

// Halaman index
app.get('/', (req, res) => {
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

// Halaman About
app.get('/about', (req, res) => {
  const data = {
    title: 'Halaman About',
    layout: 'partials/main-layout'
  }
  res.render('about', data);
});

// Halaman Contact
app.get('/contact', async (req, res) => {
  const contacts = await Contact.find();

  const data = {
    title: 'Halaman Contact',
    layout: 'partials/main-layout',
    contacts,
    msg: req.flash('msg')
  }
  res.render('contact', data);
});

// Halaman menambahkan data
app.get('/contact/add', (req, res) => {
  const data = {
    title: 'Form Tambah Data Contact',
    layout: 'partials/main-layout'
  }
  res.render('add-contact', data);
});

// Proses menambahkan data contact
app.post('/contact', [
  check('email', 'Email tidak valid!').isEmail(),
  check('nohp', 'No HP tidak valid!').isMobilePhone('id-ID'),
  body('nama').custom(async (value) => {
    const duplikat = await Contact.findOne({
      nama: value
    });
    if (duplikat) {
      throw new Error('Nama sudah terdaftar!');
    }
    return true;
  })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const data = {
      title: 'Form Tambah Data Contact',
      layout: 'partials/main-layout',
      errors: errors.array()
    }
    res.render('add-contact', data);
  } else {
    Contact.insertMany(req.body, (err, result) => {
      if (err) {
        console.log(err);
      }
      req.flash('msg', 'Data berhasil ditambahkan!');
      res.redirect('/contact');
    })
  }
});

// Proses hapus data contact
app.delete('/contact', (req, res) => {
  Contact.deleteOne({
    nama: req.body.nama
  }, (err, result) => {
    if (err) {
      console.log(err);
    }
    req.flash('msg', 'Data berhasil dihapus!');
    res.redirect('/contact');
  });
});

app.get('/contact/edit/:nama', async (req, res) => {
  const contact = await Contact.findOne({
    nama: req.params.nama
  });
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

// Proses Edit Kontak
app.put('/contact', [
  check('email', 'Email tidak valid!').isEmail(),
  check('nohp', 'No HP tidak valid!').isMobilePhone('id-ID'),
  body('nama').custom(async (value, {
    req
  }) => {
    const duplikat = await Contact.findOne({
      nama: value
    });
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
    Contact.updateOne({
      _id: req.body._id
    }, {
      $set: {
        nama: req.body.nama,
        email: req.body.email,
        nohp: req.body.nohp
      }
    }).then((result) => {
      // Send flash message
      req.flash('msg', 'Data berhasil diubah!');
      res.redirect('/contact');
    });
  }
});

// Halaman detail contact
app.get('/contact/:nama', async (req, res) => {
  const data = {
    title: 'Halaman Detail Contact',
    layout: 'partials/main-layout',
    contact: await Contact.findOne({
      nama: req.params.nama
    })
  }
  res.render('detail', data);
});

app.listen(port, () => {
  console.log(`Mongo Contact App | listening at http://localhost:${port}`);
});