// Import
const db = require('../models/index');
const config = require('../config/auth');
const User = db.user;
const bcrypt = require('bcryptjs');

// Function
module.exports = (req, res) => {
  User.create({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  }).then(user => {
    res.status(201).json({
      message: 'User was created successfully!',
      user: user
    });
  }).catch(err => {
    res.status(500).json({
      message: 'User not created',
      error: err
    });
  });
}