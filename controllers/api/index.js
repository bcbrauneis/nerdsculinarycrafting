const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
//const themeRoutes = require('./themeRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
//router.use('/themes', themeRoutes);
module.exports = router;
