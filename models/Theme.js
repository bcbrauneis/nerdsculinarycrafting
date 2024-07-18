const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Theme extends Model {}

Theme.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        title:  {
            type: DataTypes.STRING, 
            allowNul: false, 
           }
        
    }
);
module.exports = Theme;