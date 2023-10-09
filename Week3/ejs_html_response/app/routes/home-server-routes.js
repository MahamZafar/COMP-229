
module.exports = function (app) {
    var index = require('../controllers/index-controller-server');
    app.get('/home', index.render);
};

