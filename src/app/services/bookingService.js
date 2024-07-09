angular.module('flightBookingApp')
.factory('BookingService', ['$http', function($http) {
    return {
        bookFlight: function(flightDetails) {
            return $http.post('/api/bookFlight', flightDetails);
        },
        getAllBookings: function() {
            return $http.get('/api/bookings');
        },
        deleteBooking: function(bookingId) {
            return $http.delete('/api/booking/' + bookingId);
        }
    };
}]);
