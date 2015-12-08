var users = require('../controllers/users.js');

module.exports = function(app) {
    /*app.route('/users')
    .post(users.create)
    .get(users.list);*/

    app.post('/login', users.login);
    //app.post('/login', users.login());
};
