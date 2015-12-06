// create the auth service and add it to the meanchat module
angular.module('meanchat')
    .factory('Auth', function($http) {
        // return available functions for use in controllers
        return ({
            login: login
        });

        function login() {
            // send a post request to the server
            // TODO: add url to config file
            $http.post('http://68.42.143.252:3000/login', {foo:'foo'});
        }

    });
