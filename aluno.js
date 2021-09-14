const Sequelize = require('sequelize');
const banco = require('./conexao');

const Aluno = banco.define('aluno', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
      },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
  ra: {
    type: Sequelize.STRING,
  },
  orientadorID: {
    type: Sequelize.INTEGER,
  }
});

module.exports = Aluno;