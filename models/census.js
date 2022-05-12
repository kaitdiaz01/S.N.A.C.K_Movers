const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

class Census extends Model{}

Census.init(
    {
        zip: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        medianHouseholdIncome: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'census',
      }
    );
    
    module.exports = Census;