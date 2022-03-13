const controller = require('../controllers/product.controller');
const middleware = require('../middleware/index');

module.exports = (app) => {
  // verify token check
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  // POST /api/product
  app.post('/api/product', middleware.verifyToken, controller.create);
};