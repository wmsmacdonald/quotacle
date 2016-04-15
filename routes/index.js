var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('quotes/index', {
    title: 'Hello World Koa!'
  });
});

module.exports = router;
