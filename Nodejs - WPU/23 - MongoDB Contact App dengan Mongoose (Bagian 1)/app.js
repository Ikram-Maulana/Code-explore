const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact');

const app = express();
const port = 3000;

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