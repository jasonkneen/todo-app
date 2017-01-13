// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

Alloy.Globals.reste = require("reste")();




//Alloy.Globals.reste.createCollection("tasks", [{
//    name: "Do some stuff",
//    completed: false
//}, {
//    name: "Shopping",
//    completed: true
//}]);

//Alloy.Collections.tasks.on("change", function() {
//    Ti.App.Properties.setObject("tasks", Alloy.Collections.tasks.toJSON());
//});

function getSessionToken() {
    return Alloy.Globals.user.sessionToken;
}

Alloy.Globals.reste.config({
    timeout: 10000,
    debug: true,
    autoValidateParams: false,
    url: "https://api.parse.com/1/",
    requestHeaders: {
        "X-Parse-Application-Id": "51kkhOJfC6VZsPBAnUzsPVWXrSpruneYwTRdvTPV",
        "X-Parse-REST-API-Key": "coIVSdAzHHy60mBZScPOtr04kOMozrEtCKUmCagJ",
        "Content-Type": "application/json",
        //"X-Parse-Session-Token": getSessionToken()
    },
    models: [{
        name: "task",
        id: "objectId",
        update: "updateTask",
        collections: [{
            name: "tasks",
            content: "results",
            read: "getTasks"
        }]
    }],
    methods: [{
        name: "getTasks",
        get: "classes/todo"
    }, {
        name: "updateTask",
        put: "classes/todo/<objectId>",
    }],
    onLoad: function(e, callback) {
        callback(e);
    },
    onError: function(e, retry) {

        console.log(e);

        if (!e.code) {
            var dialog = Ti.UI.createAlertDialog({
                title: "Connection problem",
                message: "There was a network error -- check and retry.",
                buttonNames: ["Cancel", "Retry"]
            });

            dialog.addEventListener("click", function(e) {
                if (e.index == 1) {
                    retry();
                } else {
                    return;
                }
            });

            dialog.show();
        }
    }
});
