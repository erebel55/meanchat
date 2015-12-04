var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    // connect to the database
    var db = mongoose.connect(config.db);

    require('../app/models/user.js'); // should I just add to module.exports in user.js?

    // return the database
    return db;
}
