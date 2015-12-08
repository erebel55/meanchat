// create a new controller and add to our angular module
angular.module('meanchat') // retrieve our module
    .controller('LoginCtrl', function($scope, $location, Auth) {

        // This object is filled by the form
        $scope.user = {};

        $scope.login = function() {
            // call login from service
            //Auth.login($scope.user);
            Auth.login($scope.user)
                .then(function() {
                    console.log('success');
                })
                .catch(function(info) {
                    console.log('error');
                    console.log(info.data);

                    // set message to be shown in the modal (modal.html)
                    $scope.message = info.data.message;
                    // show bootstrap modal
                    $('#errorModal').modal();
                });
        };
    });
