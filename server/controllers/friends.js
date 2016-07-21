console.log('we are in the friends.js controller');

var mongoose 	= require('mongoose');
var Friend 		= mongoose.model('friends');



function FriendsController(){

    this.index = function(req,res){
        Friend.find({}, function(err, data){
            if (err)
                {console.log(err);}
            res.json({data: data});
        });
    };

    this.create = function(req,res){
        console.log("now we are in the SERVER friends controller")
        friend = new Friend({ first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday });
        console.log(friend.first_name);
        friend.save(function(err){
        	if (err){
        		console.log(err);}
        	else {
        		res.json({friend})}
        })
    };

    this.update = function(req,res){
        Friend.findOne({_id: req.body._id}, function(err, friend) {
            friend.first_name = req.body.first_name,
            friend.last_name = req.body.last_name,
            friend.birthday = req.body.birthday
            console.log(friend);
            friend.save(function(err){
                if(err){
                    console.log(err);}
            res.json(friend);
            })
        })
    };

    this.delete = function(req,res){
        console.log('marco');

        Friend.remove({_id: req.params.id}, function(err, data){
            if(err) {
                console.log(err);
            }
            res.json("hello");
        })
    };

    this.show = function(req,res){
        console.log('polo');
        Friend.find({_id: req.params.id}, function(err, data){
            if(err){
                console.log(err);}
        console.log(data);
        res.json({data:data});
        })
    };
}

module.exports = new FriendsController(); 


