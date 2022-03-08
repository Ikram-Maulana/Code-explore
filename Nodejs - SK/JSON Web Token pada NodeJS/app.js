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
router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    res.json(users);
  });
});

// Prefix /api
app.use('/api', router);

// Run App
app.listen(port, () => {
  console.log(`Server is running on: http://127.0.0.1:${port}`);
});