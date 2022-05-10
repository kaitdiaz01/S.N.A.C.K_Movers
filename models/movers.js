const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

class Movers extends Model{}

Movers.init(
    {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        website: {
          type: DataTypes.STRING,
        },
        rating: {
          type: DataTypes.DECIMAL,
          allowNull: false,
          isDecimal: true,
        },
        image: {

        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'movers',
      }
    );
    
    module.exports = Movers;