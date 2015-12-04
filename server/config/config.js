// load the correct configuration file according to our environment
module.exports = require('./env/' + process.env.NODE_ENV + '.js');
