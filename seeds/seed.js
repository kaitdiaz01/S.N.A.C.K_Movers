const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');
const categoryData = require('./categoryData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const categories = await Categories.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();