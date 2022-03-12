const controller = require('../controllers/auth.controller');

module.exports = (app) => {
  // Checking
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  // Post /api/auth/register
  app.post('/api/auth/register', controller.register);
};