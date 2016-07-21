var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){

	$routeProvider.when('/', {
		templateUrl: 'partials/index.html'
	})
	.when('/new', {
		templateUrl: 'partials/new.html',
		controller: 'newController'
	})
	.when('/show/:id', {
		templateUrl: 'partials/show.html'
	})
	.when('/edit/:id', {
		templateUrl: 'partials/edit.html',
		controller: 'editController'
	})
	.otherwise({
		redirectTo: "/"
	});
})