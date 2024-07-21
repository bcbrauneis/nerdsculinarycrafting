const countdown = require('countdown-pkg');
const router = require('express').Router();
const Recipe = require('../../models/Recipe');

router.get('/count', async (req, res) => {
    const countdownCb = async () => {
        try {
           
            await Recipe.update(
                { isWinner: false },
                { where: { isWinner: true } }
            );
            console.log('All recipes updated successfully');

            const allRecipes = await Recipe.findAll();
            
            const randomIndex = Math.floor(Math.random() * allRecipes.length);
            console.log(randomIndex); 

            const selectedRecipe = allRecipes[randomIndex];

            await Recipe.update(
                { isWinner: true },
                { where: { id: selectedRecipe.id } }
            );
            console.log('Selected recipe updated as the winner');

            return selectedRecipe;

        } catch (error) {
            console.error('Error updating recipes or choosing random recipe:', error);
            return null;
        }
    };

    countdown('2024-07-21', '13:57:00', countdownCb);
    res.status(200).json({ message: "countdown is running on server" });
});

module.exports = router;