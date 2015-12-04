var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	username: String,
	password: String,
	email: String,
	firstName: String,
	lastName: String
});

module.exports = mongoose.model('User', userSchema);
