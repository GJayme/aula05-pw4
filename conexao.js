const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  "aula05",
  "root",
  "root",
  {
    dialect: "mysql",
    host: "localhost"
  }
);

module.exports = sequelize;