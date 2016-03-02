"use strict";
//view locals
module.exports={
    name: 'quotacle',
    title: 'Quotacle',
    description: '',
    flash: function(){
        return this.flash;
    },
    user: function(){
        return this.request.user;
    }
};