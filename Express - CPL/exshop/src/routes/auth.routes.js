const controller = require('../controllers/auth.controller');
const middleware = require('../middleware/index');

module.exports = (app) => {
  // Checking
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  // Post /api/auth/register
  app.post('/api/auth/register', middleware.isUserExist, controller.register);
};