
const sequelize = require('../config/connection');
const { User, Theme, Recipe } = require('../models');

const userData = require('./userseeds.json');
const themeData = require('./themeseeds.json');
const recipeData = require('./recipeseeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const recipe of recipeData) {
    await Recipe.create({
      ...recipe,
    });
  }

  process.exit(0);
};

seedDatabase();