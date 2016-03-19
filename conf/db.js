var mysql = require('mysql');
var path = require('path');
var fs = require('fs');

var credentials = fs.readFileSync(path.join(__dirname, 'db_credentials.conf')).toString().split('\n');

var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'db.quotacle.com',
  user: credentials[0],
  password: credentials[1],
  database: 'quotacle'
});

module.exports.pool = pool;