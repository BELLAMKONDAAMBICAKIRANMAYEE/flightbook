angular.module('flightBookingApp')
.controller('SignupController', ['$scope', 'AuthService', function($scope, AuthService) {
    $scope.signup = function() {
        AuthService.signup($scope.user)
        .then(function(response) {
            alert('Signup successful!');
        }, function(error) {
            alert('Signup failed!');
        });
    };
}]);
