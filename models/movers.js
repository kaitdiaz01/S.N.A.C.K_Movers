const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

class Movers extends Model{}

Movers.init(
    {
        name: {

        },
        website: {

        },
        rating: {

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