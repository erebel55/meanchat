var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	username: String,
	password: String,
	email: String,
	firstName: String,
	lastName: String
});

// is this best practice?
//module.exports = mongoose.model('User', userSchema);

mongoose.model('User', userSchema);
