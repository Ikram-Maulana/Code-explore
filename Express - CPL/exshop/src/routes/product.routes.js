const controller = require('../controllers/product.controller');
const middleware = require('../middleware/index');

module.exports = (app) => {
  // verify token check
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  // Get /api/product
  app.get('/api/product', middleware.verifyToken, controller.index);
  // POST /api/product
  app.post('/api/product', middleware.verifyToken, controller.create);
  // Get /api/product/:id
  app.get('/api/product/:id', middleware.verifyToken, controller.show);
  // PATCH /api/product/:id
  app.patch('/api/product/:id', middleware.verifyToken, controller.update);
  // DELETE /api/product/:id
  app.delete('/api/product/:id', middleware.verifyToken, controller.delete);
};