/**
 * Created by App-Bakerz on 9/13/2014.
 */



define([

    'backbone',
    'models/todolist',
    'lib/firebase',
    'lib/backbone-firebase.min'

],function(Backbone , List) {

    var Lists = Backbone.Firebase.Collection.extend({
        model: List,
        firebase: new Firebase("https://loginsyteam.firebaseio.com/lists/")
    });


    return Lists;
});
