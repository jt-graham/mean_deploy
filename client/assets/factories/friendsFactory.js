console.log('In the Friends Factory');



myApp.factory('friendsFactory', ['$http', function($http) {

    var friends = [];
    var friend = [];

    function FriendsFactory(){
        var _this = this;

        this.create = function(newfriend, callback){
            console.log("in the friendsfactory.create")
            console.log(newfriend);
            $http.post('/friends', newfriend).then(function(returned_data){
                console.log(returned_data.data);
                if (typeof(callback) == 'function')
                    {callback(returned_data.data);}
            });
        };

        this.update = function(friend, callback){ 
            $http.put('/friends/' + friend._id, friend).then(function(returned_data){
                console.log(returned_data.data);
            })
        };

        this.index = function(callback){
            $http.get('/friends').then(function(returned_data){
                // console.log(returned_data.data);
                friends = returned_data.data;
                callback(friends);
            })
        };

        this.delete = function(friend, callback){
            console.log(friend);
            $http.delete('/friends/' + friend._id, friend).then(function(returned_data){
            })
        };

        this.getFriend = function(friend, callback){
            console.log(friend);
            $http.get('/friends/'+ friend.id).then(function(returned_data) {
                // returned_data.data.birthday = new Date(returned_data.data.birthday)
                friend = returned_data.data
                console.log(returned_data.data);
                callback(friend);
            })
        };
    }
  return new FriendsFactory();
}]);