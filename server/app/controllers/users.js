var User = require('mongoose').model('User'),
    passport = require('passport');

// TESTING
exports.login = function(req, res, next) {
    console.log('passport authenticate');
    //passport.authenticate('local', {successRedirect:'/', failureRedirect:'/login'})(req, res, next);
    //return passport.authenticate('local', {successRedirect:'/', failureRedirect:'/login'});
    return passport.authenticate('local', function(err, user, info) {
        if (err) {
            console.log('next(err)');
            return next(err);
        }
        if (!user) {
            console.log('!user');
            console.log(info);
            return res.status(401).json(info);
        }
        req.logIn(user, function(err) {
            if (err) {
                console.log('err');
                return next(err);
            }
            console.log('logged in ' + user);

            res.json(user);
        });
    })(req, res, next);
};

// Create a new user
exports.create = function(req, res, next) {
        // create a new user
        var user = new User(req.body);

        // save the new user to the db
        user.save(function(err) {
            if (err) {
                // pass the error to the next middleware
                return next(err);
            } else {
                // respond with the user
                res.json(user);
            }
        });
};

// Get a list of users
exports.list = function(req, res, next) {
    // Query the database for all documents in the users collection
    User.find({}, function(err, users) {
        if (err) {
            return next(err);
        } else {
            res.json(users);
        }
    });
};
