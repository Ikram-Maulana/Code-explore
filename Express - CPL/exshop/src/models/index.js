const db = require('../config/database');

// Import Model
db.user = require('../models/user.model')(db.sequelize, db.Sequelize);
db.category = require('../models/category.model')(db.sequelize, db.Sequelize);
db.product = require('../models/product.model')(db.sequelize, db.Sequelize);
db.image = require('../models/image.model')(db.sequelize, db.Sequelize);

// Export
module.exports = db;