const router = require('express').Router();
const { Recipe, Theme, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']],
      });
  
  
      res.render('homepage', {

      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/recipes/:id', async (req, res) =>
{
     try {
        const recipeData = await Recipe.findByPk(req.params.id); 
        const recipe = recipeData.get({ plain:true});
        res.render('recipe', {
            ...recipe,
            logged_in: req.session.logged_in
          });
        } catch (err) {
          res.status(500).json(err);
        }
    });

    router.get('/themes', async (req, res) => {
        try {
            const themeData = await Theme.findAll();
    
            res.render('themes', { themes: themeData, logged_in: req.session.logged_in });
        } catch (err) {
            res.status(500).json(err); 
        }
    });
  
  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
  