var mysql = require('mysql');
var credentials = require('./db_credentials');

var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'db.quotacle.com',
  user: credentials.user,
  password: credentials.password,
  database: 'quotacle'
});

module.exports.pool = pool;