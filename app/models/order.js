const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize-config');
const User = require('../models/user')
const Car = require('../models/car')
const Order = sequelize.define('Order', {
  userId: Sequelize.INTEGER,
  carId: Sequelize.INTEGER,
  quantity: Sequelize.INTEGER,
  total: Sequelize.DECIMAL,
  orderDate: Sequelize.DATE,
  status: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
   }
});

// Definir relaciones entre los modelos
Order.belongsTo(User, { foreignKey: 'userId' });
Order.belongsTo(Car, { foreignKey: 'carId' });

module.exports = Order;
