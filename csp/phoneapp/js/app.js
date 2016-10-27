var app = angular.module('DemoPhoneMarketApp', ['ngRoute']);

app.config(function($routeProvider) { 
	$routeProvider 
	.when('/', { 
		controller: 'MainController', 
		templateUrl: 'views/home.html' 
	}) 
	.otherwise({ 
		redirectTo: '/' 
	});
});
