var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function() {
    passport.use(new LocalStrategy(
        function(username, password, done) {
            console.log('searching db for ' + username);

            // search the database for a user with this username
            User.findOne({username: username},
                function(err, user) {
                    if (err) {
                        console.log("Error finding username");
                        return done(err);
                    }

                    if (!user) {
                        return done(null, false, {
                            message: 'User not found with username ' + username
                        });
                    }

                    if (!user.authenticate(password)) {
                        return done(null, false, {
                            message: 'The password you entered is incorrect. Please try again.'
                        });
                    }

                    // call the done callback with the user mongoose object
                    return done(null, user);
                });
                //return done(null, false);
            }));
};
