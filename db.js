var mysql = require('mysql');
require('dotenv').config();
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

module.exports = {
    getResults: async function () {
        return new Promise(async function (resolve, reject) {
            con.query("select * from Student", (err, results) => {
                if (err) {
                    reject(new Error('Ooops, something broke!'));
                    console.log(err);
                }
                resolve(JSON.stringify(results));
            })
        });
    }
}