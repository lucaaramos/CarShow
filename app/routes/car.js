const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController'); // Importa el controlador completo

router.get('/cars', carController.getAllCars);
router.post('/cars', carController.createCar); // Utiliza la función createCar del controlador
router.put('/cars/:id', carController.desactivateCar)
router.put('/cars/update/:id', carController.updateCar)

module.exports = router;
