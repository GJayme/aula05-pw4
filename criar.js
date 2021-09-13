const mysql = require('mysql2');

const conexao = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: "root",
  password: "root",
  database: 'aula05'
});

function criarTabela(con) {
  const sql = `CREATE TABLE IF NOT EXISTS boletim(
      ID int NOT NULL AUTO_INCREMENT PRIMARY KEY, \n
      materia varchar(60) NOT NULL, \n
      nota int
    );`;

  con.query(sql, function (err, result, fields) {
    if (err) {
      console.log(err);
    }
    console.log("Tabelas criadas com sucesso");
  })
}

criarTabela(conexao);