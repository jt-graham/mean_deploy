myApp.controller('editController', ['$scope', 'friendsFactory', '$location','$routeParams', function($scope, friendsFactory, $location, $routeParams){
	
	console.log("We are in the edit controller")

	var self = this;
	self.friend = {};
	self.friend_id = $routeParams;

	friendsFactory.getFriend(self.friend_id, function(returned_data){
		self.friend = returned_data.data[0];
		console.log(self.friend);
		console.log("ENERGY DRINKS!!")
	})

	self.edit = function(){
		console.log(self.friend);
		friendsFactory.update(self.friend);
		$location.path('/');
	}
}])