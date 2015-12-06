// create a new controller and add to our angular module
angular.module('meanchat') // retrieve our module
    .controller('LoginCtrl', function($scope, $location, Auth) {

        $scope.login = function() {
            Auth.login();
        };
    });
