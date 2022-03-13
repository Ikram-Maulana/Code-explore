const controller = require('../controllers/ads.controller');

module.exports = (app) => {
  // verify token check
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  // Get /api/ads/random
  app.get('/api/ads/random', controller.random);
};