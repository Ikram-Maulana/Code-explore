// Requirement
const express = require('express');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Database
require('./app/utils/db');

// Setup
require('./app/passport')(passport);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  cookie: {
    maxAge: 60000
  },
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Setup EJS
app.set('view engine', 'ejs');

// Route using Require
require('./app/route')(app, passport);

// Run App
app.listen(port, () => {
  console.log('Server is running on port ' + port);
});