module.exports = function(app) {
    var index = require('../controllers/index.js');
    app.get('/', index.render);
}
