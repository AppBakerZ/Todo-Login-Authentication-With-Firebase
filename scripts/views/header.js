
define([
    'backbone',
    'lib/firebase-simple-login',
    'views/auth'

],function(Backbone ) {

    var Header = Backbone.View.extend({
        className : 'header',
        events: {
            'click li.logout': 'logout'
        },
        render: function () {
            var  self = this;
            $.get('templates/header.htm' , function(template){
                self.$el.html(template);
                if(localStorage.getItem('login') !== "false") {
                    self.$('.home').addClass('hide');
                    self.$('.signup').addClass('hide');
                    self.$('.login').addClass('hide');
                    self.$('.list').removeClass('hide');
                    self.$('.logout').removeClass('hide');
                    self.$('.setPassword ').removeClass('hide');
                    self.$('.profile ').removeClass('hide');
                }
            });
            return this;
        },

        logout : function(e) {
            console.log('logout');
            auth.logout();
            localStorage.setItem('login', false);
            localStorage.removeItem('email');
            localStorage.removeItem('loginId');
            App.Router.navigate('login', { trigger: true });

        }
    });

    return Header;

});
