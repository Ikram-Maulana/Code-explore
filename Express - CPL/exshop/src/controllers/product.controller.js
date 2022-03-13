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

// Single show product
exports.show = (req, res) => {
  const id = req.params.id;
  Product.findByPk(id).then(result => {
    // Checking
    if (result.user_id !== req.userId) {
      res.status(401).json({
        message: "You don't have permission to access this product"
      });
      return;
    }

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

// Update Product 
exports.update = (req, res) => {
  const id = req.params.id;
  Product.findByPk(id).then(result => {
    // Checking
    if (result.user_id !== req.userId) {
      res.status(401).json({
        message: "You don't have permission to access this product"
      });
      return;
    }

    Product.update(req.body, {
      where: {
        id: id
      }
    }).then(num => {
      if (num == 1) {
        res.status(200).json({
          message: 'Product updated successfully'
        });
      } else {
        res.status(400).json({
          message: `Cannot update product with id ${id}`
        });
      }
    }).catch(err => {
      res.status(500).json({
        message: 'Error when updating product',
        error: err
      });
    });
  }).catch(err => {
    res.status(500).json({
      message: 'Error when getting product',
      error: err
    });
  });
};