console.log('friends model');

var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	birthday: String
});
// build your friend schema and add it to the mongoose.models

mongoose.model('friends', FriendSchema);