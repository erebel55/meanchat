var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function() {
    var app = express();

    // check environment variable
    if (process.env.NODE_ENV === 'development') {
        // logging
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        // compression for prod
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended:true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    // session middleware that adds a session object to all request objects
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    // initialize passport
    app.use(passport.initialize());
    app.use(passport.session());

    // include the routes
    //require('../app/routes/index.js')(app);
    require('../app/routes/users.js')(app);

    //app.use(express.static('./public'));

    return app;
};
