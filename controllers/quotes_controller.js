var quotes = require('../services/quotes_service');

var QuotesController = {
  getMany: function getMany(params, callback) {
    console.log('QuotesController.getMany');
    quotes.getMany(params, callback);
  }
};

module.exports = QuotesController;

