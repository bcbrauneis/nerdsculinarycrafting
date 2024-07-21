const router = require('express').Router();
const {Recipe, User} = require('../../models');
const { Op } = require("sequelize");

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

// router.get('/newWinner', async (req, res) => {
//   try {
//     const currentWinner = await Recipe.findAll({
//       where: { isWinner: true }
//     });

//     const allLosers = await Recipe.findAll({
//       where: { isWinner: { [Op.ne]: true } }
//     });

//     console.log("All Losers:", allLosers.id);

//     function selectRandomRecipe(recipes) {
//       let filteredRecipes = recipes.filter(recipe => recipe.id !== 0); // Exclude current winner
//       if (filteredRecipes.length > 0) {
//           let randomIndex = Math.floor(Math.random() * filteredRecipes.length);
//           return filteredRecipes[randomIndex];
//       } else {
//           return null; // Return null if there are no valid recipes to select
//       }
//     }

//     const selectedRecipe = selectRandomRecipe(allLosers);
//     console.log("Selected Recipe:", selectedRecipe);

//     // Set new winner
//     await Recipe.update({ isWinner: true }, { where: { id: selectedRecipe.id } });
//     console.log("New Winner ID:", selectedRecipe.id);

//     // Unset old winner
//     await Recipe.update({ isWinner: false }, { where: { id: currentWinner[0].id } });
//     console.log("Old Winner ID:", currentWinner[0].id);

//     // Fetch the selected recipe with associated user data
//     const updatedSelectedRecipe = await Recipe.findByPk(selectedRecipe.id, {
//       include: User // Include the User model to fetch the associated user data
//     });

//     const data = updatedSelectedRecipe.get({ plain: true });

//     res.status(200).json(data);
//   } catch (err) {
//     console.error("Error:", err);
//     res.status(500).json(err);
//   }
// });

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