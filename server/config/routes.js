console.log("We are in Routes.js");

var mongoose 	= require('mongoose');
var friends 	= require('./../controllers/friends.js');

console.log(friends)
console.log("********")

module.exports = function(app){

	console.log(friends.index)

	app.get('/friends', friends.index );
	app.get('/friends/:id', friends.show);
	app.post('/friends', friends.create);
	app.put('/friends/:id', friends.update);
	app.delete('/friends/:id', friends.delete);
}
