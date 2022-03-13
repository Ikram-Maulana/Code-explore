// Requirement
const db = require('../models/index');
const Product = db.product;

// Function
// Show all product
exports.index = (req, res) => {
  Product.findAll({
    where: {
      user_id: req.userId
    }
  }).then(result => {
    res.status(200).json({
      message: 'Show all products successfully',
      data: result
    });
  }).catch(err => {
    res.status(500).json({
      message: 'Error when getting products',
      error: err
    });
  });
};

// Create product
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).json({
      message: 'Title must be required'
    });
    return;
  }

  const product = {
    user_id: req.userId,
    ...req.body
  }

  Product.create(product).then(result => {
    res.status(201).json({
      message: 'Product created successfully',
      data: result
    });
  }).catch(err => {
    res.status(500).json({
      message: 'Error when creating product',
      error: err
    });
  });
};