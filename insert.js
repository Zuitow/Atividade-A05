var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "123456",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
var sql = "INSERT INTO customers (name, address)VALUES ('Company Inc', 'Highway 37')"
  con.query(sql,function (err, result, fields) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
