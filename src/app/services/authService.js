angular.module('flightBookingApp')
.factory('AuthService', ['$http', function($http) {
    return {
        signup: function(user) {
            return $http.post('/api/signup', user);
        },
        login: function(user) {
            return $http.post('/api/login', user);
        }
    };
}]);
