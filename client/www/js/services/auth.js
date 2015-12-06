// create the auth service and add it to the meanchat module
angular.module('meanchat')
    .factory('Auth', function($http) {
        // return available functions for use in controllers
        return ({
            login: login
        });

        function login() {
            // send a post request to the server
            $http.post(config.serverUrl + '/login', {foo:'foo'});
        }

    });
