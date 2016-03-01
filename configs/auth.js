"use strict";
var passport = require('koa-passport')

module.exports=function(app, config){
    passport.serializeUser(function(user, done) {
        done(null, user.id)
    })
    
    passport.deserializeUser(function(id, done) {
        let user={ id: 1, username: 'admin' }
        done(null, user)
    })

    var LocalStrategy = require('passport-local').Strategy
    passport.use(new LocalStrategy(function(username, password, done) {
        let user={ id: 1, username: 'admin' };
        if (username === 'admin' && password === 'admin') {
            done(null, user)
        } else {
            done(null, false)
        }
    }))




        
    return passport
}