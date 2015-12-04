var User = require('mongoose').model('User');

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
