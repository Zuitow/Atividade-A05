var mysql = require('mysql2');

//  CONEXÃO Login e dados

var con = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "123456"
});

//Comando para criar banco de dados com mysql!!

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
