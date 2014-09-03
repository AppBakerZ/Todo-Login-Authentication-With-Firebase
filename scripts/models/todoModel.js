/**
 * Created by App-Bakerz on 8/5/2014.
 */

define([

    'backbone',
    'lib/firebase',
    'lib/backbone-firebase.min'

],function(Backbone) {

    var User = Backbone.Model.extend({
        defaults: {
            id : 'null' ,
            name : 'username',
            age : 'null',
            email : 'eaxample@net.com'
        }
    });

    return User;
});
