angular.module('flightBookingApp')
.controller('AdminController', ['$scope', 'BookingService', function($scope, BookingService) {
    $scope.loadBookings = function() {
        BookingService.getAllBookings()
        .then(function(response) {
            $scope.bookings = response.data;
        }, function(error) {
            alert('Failed to load bookings!');
        });
    };

    $scope.deleteBooking = function(bookingId) {
        BookingService.deleteBooking(bookingId)
        .then(function(response) {
            alert('Booking deleted!');
            $scope.loadBookings();
        }, function(error) {
            alert('Failed to delete booking!');
        });
    };

    $scope.loadBookings();
}]);
