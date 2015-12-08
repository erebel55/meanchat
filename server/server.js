// Set the environment variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express'),
    mongoose = require('./config/mongoose'),
    passport = require('./config/passport');

// Create a new Mongoose connection instance
var db = mongoose();
// Create a new express application instance
var app = express();
// Configure the Passport middleware
var passport = passport();

// Use the Express application instance to listen to the '3000' port
app.listen(3000);

console.log('Server running at http://localhost:3000/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;
