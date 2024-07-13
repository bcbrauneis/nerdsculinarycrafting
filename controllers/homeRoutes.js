const router = require('express').Router();
const { Recipe, Theme, User } = require('../models');
const withAuth = require('../utils/auth');



  router.get('/', async (req, res) => {
   try {
  
      const recipeData = await Recipe.findAll({
    
     });
  
       //Serialize data so the template can read it
      const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
  
      //Pass serialized data and session flag into template
      res.render('homepage', { 
       recipes, 
       logged_in: req.session.logged_in 
      });
    } catch (err) {
     res.status(500).json(err);
    }
  });
  
  

  router.get('/api/recipes/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.findByPk(req.params.id); 
        if (!recipeData) {
            return res.status(404).send('Recipe not found');
        }
        
        const recipe = recipeData.get({ plain: true });
        res.render('recipe', {
            recipe,
            // logged_in: req.session.logged_in
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
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
  