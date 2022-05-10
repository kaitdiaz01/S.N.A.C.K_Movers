const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

class Hotels extends Model{}

Hotels.init(
    {
        name: {
          type: DataTypes.STRING
        },
        address: {
          type: DataTypes.STRING
        },
        rating: {
          type: DataTypes.INTEGER
        },
        image: {
          type: DataTypes.STRING

        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'hotels',
      }
    );
    
    module.exports = Hotels;