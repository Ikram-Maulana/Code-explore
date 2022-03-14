// Import sequelize
const Sequelize = require('sequelize');

// Configure sequelize
const config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
}

// Koneksi ke database
const sequelize = new Sequelize(config);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Exports
module.exports = db;