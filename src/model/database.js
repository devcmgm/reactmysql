var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'node',
  'root',
  'P1a2s3s4!',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;