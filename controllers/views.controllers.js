function indexPage(req, res) {
    res.render('index', { name: 'Martin Rodriguirijillo' });
}

function aboutPage(req, res) {
    res.render('about', { name: 'Martin Rodriguirijillo' });
}


module.exports = {
    indexPage,
    aboutPage
}