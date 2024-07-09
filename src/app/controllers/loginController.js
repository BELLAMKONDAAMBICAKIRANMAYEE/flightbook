angular.module('flightBookingApp')
.controller('LoginController', ['$scope', 'AuthService', function($scope, AuthService) {
    $scope.login = function() {
        AuthService.login($scope.user)
        .then(function(response) {
            alert('Login successful!');
        }, function(error) {
            alert('Login failed!');
        });
    };
}]);

