var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "bootcamp"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;