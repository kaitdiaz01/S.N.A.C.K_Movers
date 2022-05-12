const User = require('./User');
const Hotels = require('./Hotels');
const Movers = require('./Movers');
const Schools = require('./Schools');
const Census = require('./Census');
const Categories = require('./categories')

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