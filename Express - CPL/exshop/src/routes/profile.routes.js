const controller = require('../controllers/profile.controller');
const middleware = require('../middleware/index');

module.exports = (app) => {
  // verify token check
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  // Get /api/profile
  app.get('/api/profile', middleware.verifyToken, controller.profile);
};