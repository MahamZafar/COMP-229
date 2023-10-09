// JavaScript source code
exports.render = function (req, res) {
    res.render('about', {
        title: 'Hello World About page',
        browserTitle: 'ejs about example'
    })
};