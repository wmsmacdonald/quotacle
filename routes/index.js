var express = require('express');
var pool = require('../conf/db').pool;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var pre_query = new Date().getTime();
    var query = "select title,line from subtimes where match(keywords, line) against('+Star +Wars +Empire I am your father.' in boolean mode) limit 10";
    connection.query(query, function(err, rows, fields) {
      if (err) throw err;

      var post_query = new Date().getTime();
      console.log('Lines: ', rows);
      console.log('Fields: ', fields);
      var duration = (post_query - pre_query) / 1000;
      console.log('duration: ', duration);
      connection.release();
    });
  });

  res.render('index', { title: 'Express' });
});

module.exports = router;
