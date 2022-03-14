const db = require('../config/database');

// Import Model
db.user = require('../models/user.model')(db.sequelize, db.Sequelize);
db.category = require('../models/category.model')(db.sequelize, db.Sequelize);
db.product = require('../models/product.model')(db.sequelize, db.Sequelize);
db.image = require('../models/image.model')(db.sequelize, db.Sequelize);

// Relational Model
db.user.hasMany(db.product, {
  foreignKey: 'user_id'
});
db.product.belongsTo(db.user, {
  foreignKey: 'user_id'
});
db.product.hasMany(db.image, {
  foreignKey: 'product_id'
});
db.category.hasMany(db.product, {
  foreignKey: 'category_id'
});

// Export
module.exports = db;