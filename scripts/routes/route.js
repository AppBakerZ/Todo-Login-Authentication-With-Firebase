
define([

    'backbone',
    'views/index',
    'views/signup',
    'views/login',
    'views/profile',
    'views/mainView',
    'views/setPassword',
    'views/header',
    'views/list',
    'views/todo',
    'views/footer',
    'lib/firebase'

],function(Backbone , Index, Signup, Login, Member, MainView , SetPassword, Header ,List ,todo , Footer ) {

    var Route = Backbone.Router.extend({

        routes: {
            '': 'home',
            'signup': 'signup',
            'login': 'login',
            'member' : 'member',
            'setPassword' : 'setPassword',
            'list' : 'list'
        },
        showView: function(view, className, isRender){
            var header = new Header();

            if(this.currentView){
                this.currentNav.remove();
                this.currentView.remove();
            }
            if(!isRender){
                $('.content').append(view.el);
            }
            else{
                $('.content').append(view.render().el);
            }
            $('header').append(header.render().el)
             .find(className).addClass('active');
            this.currentNav = header;
            this.currentView = view;
        },


        home: function () {
            if(this.currentView && this.currentView.$el.hasClass('index') ) return;
            var index = new Index();
            this.showView(index, '.home' ,true);
        },
        signup: function () {
            if(this.currentView && this.currentView.$el.hasClass('signup')) return;
            if((localStorage.getItem('login') == 'true')) return App.Router.navigate('', { trigger: true });
            var signup = new Signup();
            this.showView(signup, '.signup'  ,true);
        },
        login: function () {
            if(this.currentView && this.currentView.$el.hasClass('login')) return;
            if((localStorage.getItem('login') == 'true')) return App.Router.navigate('', { trigger: true });
            var login = new Login();
            this.showView(login , '.login' , true);
        },
        member : function(){
            if(this.currentView && this.currentView.$el.hasClass('member')) return;
            if((localStorage.getItem('login') == 'false')) return App.Router.navigate('', { trigger: true });
            var member = new Member();
            this.showView(member  ,'.profile', false);
        },
        setPassword :  function(){
            if(this.currentView && this.currentView.$el.hasClass('setPassword')) return;
            if((localStorage.getItem('login') == 'false')) return App.Router.navigate('', { trigger: true });
            var setPassword = new SetPassword();
            this.showView(setPassword , '.setPassword' ,true);
        },
        list :  function(){
            if(this.currentView && this.currentView.$el.hasClass('list')) return;
            if((localStorage.getItem('login') == 'false')) return App.Router.navigate('', { trigger: true });
            var list = new List();
            this.showView(list, '.list' ,true);
        }

    });

    function Application(){
        this.Settings = {
        }
    }

//INITIALIZING APP

    Application.prototype.initialize = function(){

        var mainView = new MainView(),
            footer = new Footer();
        $('body').append(mainView.render().el);
        $('footer').append(footer.render().el);

        this.Router = new Route();

        //INITIALIZING BACKBONE HISTORY
        Backbone.history.start();

    };

    window.App = new Application();
    App.initialize();


});
