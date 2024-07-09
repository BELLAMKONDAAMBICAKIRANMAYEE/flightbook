angular.module('flightBookingApp')
.controller('BookingController', ['$scope', 'BookingService', function($scope, BookingService) {
    $scope.bookFlight = function() {
        BookingService.bookFlight($scope.flightDetails)
        .then(function(response) {
            alert('Booking successful!');
        }, function(error) {
            alert('Booking failed!');
        });
    };
}]);
