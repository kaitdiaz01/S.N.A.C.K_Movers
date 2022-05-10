const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

class Hotels extends Model{}

Hotels.init(
    {
        name: {

        },
        address: {

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
        modelName: 'hotels',
      }
    );
    
    module.exports = Hotels;