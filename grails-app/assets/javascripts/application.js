// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better 
// to create separate JavaScript files as needed.
//
//= require jquery/dist/jquery
//= require angular/angular
//= require_self

var myApp = angular.module('myApp', [])

myApp.controller('GioController', function($scope) {
	$scope.message = "ciao"
});