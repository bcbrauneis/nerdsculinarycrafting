const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const testRoutes = require('./testRoutes');
//const themeRoutes = require('./themeRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/tests', testRoutes);
//router.use('/themes', themeRoutes);


module.exports = router;
