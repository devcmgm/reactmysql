var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'node',
  'admin',
  'password',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;