var express = require('express');
var app = express();
var db =  require('./db');
async function getRes(){
    let a = await db.getResults();
    return a;
}

app.get('/', async function (req, res) {
    let a = await getRes();
    console.log('Response from Database: '+a);
    res.send('Response from Database: '+a);
})

var server = app.listen(8081,"localhost", function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
})