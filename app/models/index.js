// models/index.js

const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize-config');

// Importa los modelos individuales
const CarModel = require('../models/car');
const OrderModel = require('../models/order');
const UserModel = require('../models/user');

// Crea instancias de los modelos
const Car = new CarModel(sequelize, Sequelize);
const Order = new OrderModel(sequelize, Sequelize);
const User = new UserModel(sequelize, Sequelize);

// Exporta los modelos
module.exports = {
  Car,
  Order,
  User
};
