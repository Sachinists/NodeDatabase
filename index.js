var express = require('express');
var mysql = require('mysql');
require('dotenv').config();
var app = express();
var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
app.get('/', function (req, res) {
    con.query("select * from Student;", function (err, result) {
        if (err) throw err;
        console.log("Result: " + JSON.stringify(result));
    });
    res.send('Response from Database: '+JSON.stringify(result));
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})