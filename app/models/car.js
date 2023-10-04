const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize-config');

const Car = sequelize.define('Car', {
  brand: Sequelize.STRING,
  model: Sequelize.STRING,
  year: Sequelize.INTEGER,
  price: Sequelize.DECIMAL,
  description: Sequelize.TEXT,
  image: Sequelize.STRING,
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
   }
});

module.exports = Car;
