const controller = require('../controllers/ads.controller');

module.exports = (app) => {
  // verify token check
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  // Get /api/ads/search
  app.get('/api/ads/search', controller.search);
  // Get /api/ads/random
  app.get('/api/ads/random', controller.random);
  // Get /api/ads/:id/detail
  app.get('/api/ads/:id/detail', controller.detail);
};