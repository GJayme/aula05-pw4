const Sequelize = require('sequelize');
const banco = require('./conexao');

const Orientador = banco.define('orientador', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
      },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = Orientador;