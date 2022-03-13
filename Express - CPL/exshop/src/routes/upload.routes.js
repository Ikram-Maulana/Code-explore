const controller = require('../controllers/upload.controller');
const middleware = require('../middleware/index');

module.exports = (app) => {
  // verify token check
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  // Post /api/product/:id/upload
  app.post('/api/product/:id/upload', middleware.verifyToken, controller.upload);
  // Delete /api/image/:id
  app.delete('/api/image/:id', middleware.verifyToken, controller.remove);
};