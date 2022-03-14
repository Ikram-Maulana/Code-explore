const db = require('../models/index');
const User = db.user;

const isUserExist = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) {
      res.status(400).json({
        message: 'Email is already exist'
      });
      return;
    }
    next();
  });
};

module.exports = {
  isUserExist
};