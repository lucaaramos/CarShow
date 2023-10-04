const  Order  = require('../models/order'); 

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders); 
  } catch (error) {
    console.error('Error al obtener todas las órdenes:', error);
    res.status(500).json({ error: 'Error al obtener todas las órdenes' });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { userId, carId, quantity, total, orderDate } = req.body; 
    const newOrder = await Order.create({ userId, carId, quantity, total, orderDate });
    res.status(201).json(newOrder); 
  } catch (error) {
    console.error('Error al crear una nueva orden:', error);
    res.status(500).json({ error: 'Error al crear una nueva orden' });
  }
};




