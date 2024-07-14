const router = require('express').Router();
const Recipe = require('../../models/Recipe');

router.post('/', async (req, res) => {
    try {
      const recipeData = await Recipe.create({
        recipe_name: req.body.recipe_name,
        description: req.body.description,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        user_id: req.body.user_id
      });
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  
  module.exports = router;