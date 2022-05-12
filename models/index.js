const User = require('./User.js');
const Hotels = require('./Hotels')
const Movers = require('./Movers.js');
const Schools = require('./Schools.js');
const Census = require('./Census.js');
const Categories = require('./Categories.js')

User.hasMany(Hotels, {
  foreignKey: 'user_id',
});

User.hasMany(Movers, {
    foreignKey: 'user_id',
  });

User.hasMany(Schools, {
    foreignKey: 'user_id',
  });
  
User.hasMany(Census, {
  foreignKey: 'user_id',
});

module.exports = { User, Hotels, Movers, Schools, Census, Categories };