
module.exports = function (app) {
    var about = require('../controllers/about-controller-server');
    app.get('/about', about.render);
};

