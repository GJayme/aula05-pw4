var express = require('express');
var app = express();
const porta = '80';

const Aluno = require('./aluno');
const Orientador = require('./orientador');

Orientador.hasMany(Aluno, {
  foreignKey: "orientadorID",
  as: "orientandos"
});
Aluno.belongsTo(Orientador);

app.get("/buscaOrientador", async function(req, res) {
  
  const resultado = await Orientador.findByPk(1);
  // const resultado = await Orientador.findByPk(1, {include: ['orientandos']});
  
  console.log(busca);
  res.send(resultado);
});

app.get("/busca", async function(req, res) {
  
  const resultado = await Aluno.findAll({
    where: { 
      id: 1
    }
  })
  
  res.send(resultado);
})

app.get("/create", async function(req, res) {
  const cOrientador = await Orientador.create({
    nome: "Danilo"
  });

  const cAluno = await Aluno.create({
    nome: "Gabriel"
  })

  res.send(`Teste executado. Orientador e Aluno criado.`);
})

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
})