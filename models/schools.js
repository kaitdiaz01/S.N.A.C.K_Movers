const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

class Schools extends Model{}

Schools.init(
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
        modelName: 'schools',
      }
    );
    
    module.exports = Schools;