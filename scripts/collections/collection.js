/**
 * Created by App-Bakerz on 8/5/2014.
 */

define([

    'backbone',
    'models/todoModel',
    'lib/firebase',
    'lib/backbone-firebase.min'

],function(Backbone , User) {

    var Users = Backbone.Firebase.Collection.extend({
        model: User,
        firebase: new Firebase("https://loginsyteam.firebaseio.com/users/")
    });


    return Users;
});
