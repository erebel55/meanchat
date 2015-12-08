// create a new controller and add to our angular module
angular.module('meanchat') // retrieve our module
    .controller('LoginCtrl', function($scope, $location, Auth) {

        // This object is filled by the form
        $scope.user = {};

        $scope.login = function() {
            // call login from service
            Auth.login($scope.user);
        };
    });
