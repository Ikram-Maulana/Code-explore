// Requirement
const db = require('../models/index');
const Product = db.product;

// Function
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