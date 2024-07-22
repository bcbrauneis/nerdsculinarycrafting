const router = require('express').Router();
const { Recipe, Theme, User } = require('../models');
const withAuth = require('../utils/auth');

  router.get('/', async (req, res) => {
   try {
  
      const recipeData = await Recipe.findAll({
        where: {
          isWinner: true }
        
     });
  
       //Serialize data so the template can read it
      const recipe = recipeData[0].get({ plain: true });

      //Pass serialized data and session flag into template
      res.render('homepage', { 
       recipe,
       logged_in: req.session.logged_in 
      });
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

  router.get('/newrecipe', (req, res) => {
    try {
      if (req.session.logged_in) {
        res.render('newrecipe');
      } else {
        // Handle the case when the user is not logged in
        res.redirect('/login'); // Redirect to the login page or handle it as needed
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.get('/recipes/:id', async (req, res) => {
    try {
      const recipeData = await Recipe.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['firstname'],
          },
        ],
      });
      
      if (!recipeData) {
        return res.status(404).send('Recipe not found');
      }
  
      const recipe = recipeData.get({ plain: true });
      res.render('recipe', { recipe , logged_in: req.session.logged_in});
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router;
  