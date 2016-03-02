"use strict";
//https://github.com/alexmingoia/koa-router
var Router= require('koa-router');
var secured = function *(next) {
    if (this.isAuthenticated()) {
        yield next
    } else {
        this.status = 401;
    }
};

module.exports = function(app){
    var router= new Router();
    ///// Site
    var siteController=require('../controllers/site')

    //main
    router.get('/',siteController.index)
    //contact
    router.post('/contact', siteController.doContact)

    return router.middleware();
};
