"use strict";
//Auth controller - holds authentication logic
module.exports={
    login: function *(){
        yield this.render('site/login')
    },
    logout: function *(){
        
     	this.flash.success='See you soon!'
     	
     	this.redirect('/')
    },
    doLogin: function *(){
     	this.body={success: true}
    },
    register: function *(){
     	yield this.render('site/login')
    },
    doRegister: function *(){
        var self=this
        var attributes= this.request.body
        var UserModel= this.models.user
        UserModel.create(attributes).exec(function(){
            self.body={success: true}
        });
    },
    authSuccess: function(){
        this.redirect('/')
    }
}