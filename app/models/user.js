const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize-config');
const  Order  = require('../models/order');

const User = sequelize.define('User', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  isAdmin: Sequelize.BOOLEAN,
  registrationDate: Sequelize.DATE,
  
});

// User.belongsToMany(Order, {
//   through: 'UserOrders', // Nombre de la tabla intermedia
//   foreignKey: 'userId',
// });

module.exports = User;

