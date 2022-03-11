const db = require('../config/database');

// Import Model
db.user = require('../models/user.model')(db.sequelize, db.Sequelize);

// Export
module.exports = db;