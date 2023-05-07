const express = require('express');
const router = express.Router();
const viewControllers = require('../controllers/views.controllers.js');

router.get('/', viewControllers.indexPage);
router.get('/about', viewControllers.aboutPage);
router.get('/login', viewControllers.loginPage);

module.exports = router;