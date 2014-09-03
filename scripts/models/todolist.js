/**
 * Created by App-Bakerz on 9/13/2014.
 */


define([

    'backbone',
    'lib/firebase',
    'lib/backbone-firebase.min'

],function(Backbone) {

    var List = Backbone.Model.extend({
        defaults: {
            id : 'null' ,
            title : 'What needs todo done!'
        }
    });

    return List;
});
