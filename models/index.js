const User = require('./User');
const Recipe = require('./Recipe');
const Theme = require('./Theme');

User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Theme.hasMany(Recipe, {
    foreignKey: 'theme_id',
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id'
});

Recipe.belongsTo(Theme,{
    foreignKey: 'theme_id'
});

module.exports = { User, Recipe, Theme };
