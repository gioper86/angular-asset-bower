var myApp = angular.module('myApp', ['ngRoute', 'ngResource'])

myApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'GioController',
		templateUrl: '/angular-asset-bower/assets/views/view.html',
		reloadOnSearch: false
	})
	.otherwise({
		redirectTo : '/'
	});
}])


myApp.controller('GioController', function($scope, $resource) {
	$scope.message = "ciao"
	$scope.cars = []
	
	$scope.init = function() {
		var Car = $resource("../cars")
		
		Car.query({}, function(response) {
			$scope.cars = response
		})	
	}
	
	$scope.init()
});