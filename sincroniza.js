(async () => {
  const banco = require('./conexao');
  const Aluno = require('./aluno');
  const Orientador = require('./orientador');

  try {
    const resultado = await banco.sync();
    console.log(resultado);
  }catch(err) {
    console.log(err);
  }
})();