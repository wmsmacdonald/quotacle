var mysql = require('mysql');
var path = require('path');
var fs = require('fs');

var credentials = require('secrets/db_credentials');

var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'db.quotacle.com',
  user: credentials.user,
  password: credentials.password,
  database: 'quotacle'
});

module.exports.pool = pool;