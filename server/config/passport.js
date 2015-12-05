var passprot = require('passport'),
    mongoose = require('mongoose');

module.exports = function() {
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

    require('./strategies/local.js')();
};
