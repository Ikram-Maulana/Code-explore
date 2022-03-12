// Requirement
const jwt = require('jsonwebtoken');
const config = require('../config/auth');

// Function
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({
      message: 'No token provided'
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: 'Invalid token'
      });
    }
    req.userId = decoded.id;
    next();
  });
};

// Exports
module.exports = {
  verifyToken
};