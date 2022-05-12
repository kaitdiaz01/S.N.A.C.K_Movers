const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

class Categories extends Model{}

Categories.init(
    {  
        name: {
          type: DataTypes.STRING

        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'categories',
      }
    );
    
    module.exports = Categories;