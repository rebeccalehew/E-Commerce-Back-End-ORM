const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');
const { Category, Product, ProductTag, Tag } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedCategories();

  await seedProducts();

  await seedTags();

  await seedProductTags();

  process.exit(0);
};

seedDatabase();
