var myApp = angular.module('myApp', ['ngRoute'])

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


myApp.controller('GioController', function($scope) {
	$scope.message = "ciao"
});