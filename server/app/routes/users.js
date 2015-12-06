var users = require('../controllers/users');

module.exports = function(app) {
    /*app.route('/users')
    .post(users.create)
    .get(users.list);*/

    app.post('/login', function(){console.log('received post for /login');});
};
