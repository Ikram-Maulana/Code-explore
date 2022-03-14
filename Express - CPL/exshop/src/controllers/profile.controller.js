const db = require('../models/index');
const User = db.user;

exports.profile = (req, res) => {
  User.findByPk(req.userId).then(user => {
    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone
    });
  }).catch(err => {
    res.status(500).json({
      message: 'Error when getting user',
      error: err
    });
  });
};