const router = require('express').Router();
const Recipe = require('../../models/Recipe');

router.get('/', async (req, res) => {
  try {
      const recipeData = await Recipe.findAll();
      
      // Serialize data to JSON format
      const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
      
      res.json(recipes);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id);
    
    if (!recipeData) {
      return res.status(404).send('Recipe not found');
    }

    const recipe = recipeData.get({ plain: true });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
    try {
      const recipeData = await Recipe.create({
        recipe_name: req.body.recipe_name,
        description: req.body.description,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        user_id: req.body.user_id,
        theme_id: req.body.user_id
      });
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  
  module.exports = router;