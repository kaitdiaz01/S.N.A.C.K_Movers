const User = require('./User');
const Hotels = require('./hotels');
const Movers = require('./movers');
const Schools = require('./schools');
const Census = require('./census');
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