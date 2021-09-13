const mysql = require('mysql2');

const sql = `INSERT INTO aula05.boletim(materia, nota) VALUES (\'PW4'\, 9);`;
const sql2 = `SELECT materia from aula05.boletim WHERE ID = 1;`;

const conexao = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: "root",
  password: "root",
  database: 'aula05'
});

conexao.query(sql, function (err, result, fields) {
  if(err) {
    console.log(err);
  } else {
    console.log("Sucesso!");
  }
});

console.log("\n\n consulta:");

conexao.query(sql2, function (err, result, fields) {
  if(err) {
    console.log(err);
  } else {
    console.log(result);
  }
})

conexao.end();