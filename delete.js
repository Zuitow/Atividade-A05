var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "123456",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Numbers of records deleted " + result.affectedRows);
  });
});

