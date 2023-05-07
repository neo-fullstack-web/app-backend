function indexPage(req, res) {
    res.render('index', { name: 'Martin Rodriguirijillo' });
}

function aboutPage(req, res) {
    res.render('about', { name: 'Martin Rodriguirijillo' });
}

function loginPage(req, res) {
    res.render('login', { name: 'Un LOGUINks' })
}


module.exports = {
    indexPage,
    aboutPage,
    loginPage
}