var app = angular.module('flightBookingApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'SignupController'
    })
    .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
    })
    .when('/booking', {
        templateUrl: 'partials/booking.html',
        controller: 'BookingController'
    })
    .when('/admin', {
        templateUrl: 'partials/admin.html',
        controller: 'AdminController'
    })
    .otherwise({
        redirectTo: '/login'
    });
}]);

app.controller('SignupController', ['$scope', '$http', function($scope, $http) {
    $scope.signup = function() {
        $http.post('/signup', $scope.user).then(function(response) {
            $scope.message = response.data.message;
        }, function(error) {
            $scope.message = "Error: " + error.data.message;
        });
    };
}]);

app.controller('LoginController', ['$scope', '$http', function($scope, $http) {
    $scope.login = function() {
        $http.post('/login', $scope.user).then(function(response) {
            $scope.message = response.data.message;
        }, function(error) {
            $scope.message = "Error: " + error.data.message;
        });
    };
}]);

app.controller('BookingController', ['$scope', '$http', function($scope, $http) {
    $scope.book = function() {
        $http.post('/booking', $scope.booking).then(function(response) {
            $scope.message = response.data.message;
        }, function(error) {
            $scope.message = "Error: " + error.data.message;
        });
    };
}]);

app.controller('AdminController', ['$scope', '$http', function($scope, $http) {
    $scope.getUsers = function() {
        $http.get('/users').then(function(response) {
            $scope.users = response.data.users;
        });
    };

    $scope.deleteUser = function(userId) {
        $http.delete('/users/' + userId).then(function(response) {
            $scope.message = response.data.message;
            $scope.getUsers(); // Refresh the list of users
        });
    };

    // Initial load of users
    $scope.getUsers();
}]);
