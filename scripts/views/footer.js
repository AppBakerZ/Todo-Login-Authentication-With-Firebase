
define([
    'backbone'
],function(Backbone) {

    var Footer = Backbone.View.extend({

        className: 'footer',

        render: function () {
            var  self = this;
            $.get('templates/footer.htm' , function(template){
                self.$el.html(template);
            });            return this;
        }

    });

    return Footer;


});
