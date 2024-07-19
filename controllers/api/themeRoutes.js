const router = require('express').Router();
const { Theme }= require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const themeData = await Theme.findAll();

        res.render('category', { themes: themeData, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err); 
    }
});


module.exports = router;