// Requirement
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const router = express.Router();
const app = express();

// Set Up
const config = require('./app/config');
const User = require('./app/models/user');
const port = 3000;

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

mongoose.connect(config.database);
app.set("secretKey", config.secret);
app.use(cors());

// Routing
router.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email
  }, (err, user) => {
    if (err) throw err;
    if (!user) {
      res.json({
        success: false,
        message: 'User not found'
      });
    } else if (user) {
      if (user.password != req.body.password) {
        res.json({
          success: false,
          message: 'Wrong password'
        });
      } else {
        const payload = {
          id: user._id,
          email: user.email,
          password: user.password
        };
        const token = jwt.sign(payload, config.secret, {
          expiresIn: '24h'
        });
        res.json({
          success: true,
          message: 'Success get Token!',
          token: token
        });
      }
    }
  });
});

router.get('/', (req, res) => {
  res.send('Hello World!');
});

// Protect route with token
router.use((req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  } else {
    jwt.verify(token, app.get('secretKey'), (err, decoded) => {
      if (err) {
        res.json({
          success: false,
          message: 'Token invalid'
        });
      } else {
        req.decoded = decoded;

        // is token expired?
        if (decoded.exp < Date.now()/1000) {
          return res.status(400).send({
            success: false,
            message: 'Token expired',
            date: Date.now()/1000,
            exp: decoded.exp
          });
        } else {
          next();
        }
      }
    });
  }
});

router.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    res.json(users);
  });
});

router.get('/profile', (req, res) => {
  res.json(req.decoded);
});

// Prefix /api
app.use('/api', router);

// Run App
app.listen(port, () => {
  console.log(`Server is running on: http://127.0.0.1:${port}`);
});