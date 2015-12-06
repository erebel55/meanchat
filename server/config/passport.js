var passport = require('passport'),
    mongoose = require('mongoose');

// Define the Passport configuration method
module.exports = function() {
    // Load the mongoose User model
    var User = mongoose.model('User');

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        // TODO: make sure we don't fetch the user's password here
        Account.findById(id, function(err, user) {
			done(err, user);
		});
    });

    // Load Passport's strategies configuration files
    require('./strategies/local.js')();
};
