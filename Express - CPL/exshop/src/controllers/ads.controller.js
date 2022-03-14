// Requirement
const db = require('../models/index');
const Product = db.product;
const Image = db.image;
const User = db.user;

// Function
// Random Ads
exports.random = (req, res) => {
  Product.findAll({
    where: {
      sold: false
    },
    limit: 10,
    order: db.sequelize.literal('RAND()'),
    include: Image
  }).then(result => {
    res.status(200).json({
      message: 'Show random products successfully',
      data: result
    });
  }).catch(err => {
    res.status(500).json({
      message: 'Error when getting products',
      error: err
    });
  });
};

// Detail ads
exports.detail = (req, res) => {
  const id = req.params.id;
  Product.findByPk(id, {
    include: [{
        model: Image,
        as: 'images'
      },
      {
        model: User,
        as: 'user',
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        }
      }
    ]
  }).then(result => {
    res.status(200).json({
      message: 'Show product successfully',
      data: result
    });
  }).catch(err => {
    res.status(500).json({
      message: 'Error when getting product',
      error: err
    });
  });
};