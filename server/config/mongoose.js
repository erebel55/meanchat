var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    // connect to the database
    var db = mongoose.connect(config.db);

    // return the database
    return db;
}
