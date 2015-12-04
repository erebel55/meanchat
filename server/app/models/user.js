var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	username: {
        type: String,
        unique: true
    },
	password: String,
	email: String,
	firstName: String,
	lastName: String
});

// is this best practice?
//module.exports = mongoose.model('User', userSchema);

mongoose.model('User', userSchema);
