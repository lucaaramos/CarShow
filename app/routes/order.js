// routes/carRoutes.js

const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController'); // Importa el controlador completo

// Ruta para obtener todos los autos
router.get('/order', orderController.getAllOrders);
router.post('/order', orderController.createOrder); // Utiliza la función createCar del controlador

// Otras rutas y métodos se pueden agregar aquí

module.exports = router;