const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

class Zip extends Model{}

Zip.init(
    {  
        zip: {
          type: DataTypes.NUMBER

        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'categories',
      }
    );
    
    module.exports = Zip;