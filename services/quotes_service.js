var QuotesService = {
  getMany: function getMany(params, callback) {
    getAll(callback);
  }
};

function getAll(callback) {
  var pool = require('../conf/db').pool;
  pool.getConnection(function (err, connection) {
    if (err) return callback(err);

    var query = "select * from movies limit 10";
    connection.query(query, function (err, rows, fields, duration) {

      //console.log('Rows: ', rows);
      //console.log('Fields: ', fields);
      console.log('duration: ', duration);
      connection.release();
      callback(err, rows);
    });
  });
}

module.exports = QuotesService;