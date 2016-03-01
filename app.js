"use strict";
var config= require('./configs/main')
var app= require('koa')()

app.name= config.name
app.keys= config.keys
app.env= config.env

if(config.env==='development')
	var debug = require('debug')('quotacle');

app.use(require('koa-bodyparser')(config.bodyparser))
app.use(require('koa-static')(config.static.directory, config.static))

app.use(require('koa-generic-session')(config.session))
app.use(require('koa-flash')(config.flash))

require('koa-ejs')(app, config.view)
app.use(require('koa-error-ejs')(config.error))

var passport=require('./configs/auth')(app, config.auth)
app.use(passport.initialize())
app.use(passport.session())

app.use(require('./configs/routes')(app, passport));
require('./configs/database')(app, config.database, function(err, ontology){
    if(err)
        throw err
    app.context.models=ontology.collections
    console.log('database adapter initialized')
})

if (!module.parent) {
	app.listen(config.port || 3000, function(){
		console.log('Server running on port '+config.port || 3000)
	})
} else
	module.exports=app
