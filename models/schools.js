const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

class Schools extends Model{}

Schools.init(
    {
        name: {
          type: DataTypes.STRING
        },
        address: {
          type: DataTypes.STRING

        },
        rating: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        image: {
          type: DataTypes.STRING
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'schools',
      }
    );
    
    module.exports = Schools;