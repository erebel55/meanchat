// create the angularjs module
// TODO: possibly split into separate modules

var app = angular.module('meanchat', [
    'ngRoute'
]);

// Configure our routes
app.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
});
