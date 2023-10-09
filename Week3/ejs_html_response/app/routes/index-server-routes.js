
module.exports = function (app) {
    var index = require('../controllers/about-controller-server');
    app.get('/index', index.render);
};

