myApp.controller('showController', ['$scope', 'friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location){

	var self= this;
	self.friend = {};

	self.friend_id = $routeParams;
	console.log('yolo-more')
	console.log(self.friend_id)

	friendsFactory.getFriend(self.friend_id, function(returned_data){
		self.friend = returned_data.data[0];
		console.log(self.friend)
		console.log('****')
	})
}])