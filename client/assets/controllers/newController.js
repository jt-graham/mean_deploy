myApp.controller('newController',['$scope', '$location', 'friendsFactory', function($scope, $location, friendsFactory ) {

	console.log('In newController');

	var index = function(){
	    friendsFactory.index(function(returned_data){
	      	$scope.friends = returned_data.data;
	      	console.log($scope.friends);
	    });
	};
	index();

	$scope.create = function(friends){
		console.log(friends)
		friendsFactory.create(friends);
		$scope.newUser = {};
		$location.path('/');
	}

	$scope.delete = function(data){
		console.log(data);
		friendsFactory.delete(data);
		index();
	}

}]);