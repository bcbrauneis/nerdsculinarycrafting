const countdown = require('countdown-pkg');
const router = require('express').Router();
const Recipe = require('../../models/Recipe');

router.get('/count', async (req, res) => {
    const countdownCb = async () => {
        try {

            // Update all recipes to set isWinner to false
            await Recipe.update(
                { isWinner: false },
                { where: { isWinner: true } }
            );
            console.log('All recipes updated successfully');


            // Fetch all recipes from the database
            const allRecipes = await Recipe.findAll();

            // Generate a random index to choose a random recipe
            const randomIndex = Math.floor(Math.random() * allRecipes.length);
            console.log(randomIndex); // Log the random index

            // Get the randomly chosen recipe
            const selectedRecipe = allRecipes[randomIndex];

            // Update the selected recipe to set isWinner to true

            await Recipe.update(
                { isWinner: true },
                { where: { id: selectedRecipe.id } }
            );
            console.log('Selected recipe updated as the winner');


            // Return the randomly chosen recipe

            return selectedRecipe;

        } catch (error) {
            console.error('Error updating recipes or choosing random recipe:', error);
            return null;
        }
    };

    countdown('2024-07-22', '18:57:00', countdownCb);

    res.status(200).json({ message: "countdown is running on server" });
});

module.exports = router;