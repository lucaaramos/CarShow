const  Car  = require('../models/car'); 

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll({
      where: {
        status: '1'
      }
    }); 
    res.status(200).json(cars); 
  } catch (error) {
    console.error('Error al obtener todos los autos:', error);
    res.status(500).json({ error: 'Error al obtener todos los autos' });
  }
};

exports.createCar = async (req, res) => {
  try {
    const { brand, model, year, price, description, image } = req.body; 

    const newCar = await Car.create({ brand, model, year, price, description, image });
    res.status(201).json('Nuevo auto creado'); 
  } catch (error) {
    console.error('Error al crear un nuevo auto:', error);
    res.status(500).json({ error: 'Error al crear un nuevo auto' });
  }
};

exports.desactivateCar = async (req, res) => {
  const carId = req.params.id;
  try {
    const car = await Car.findByPk(carId);
    if (!car) {
      return res.status(404).json({ error: 'Auto no encontrado' });
    }
    car.status = '0';
    await car.save();
    res.status(200).json({ message: 'Auto desactivado exitosamente' });
  } catch (error) {
    console.error('Error al desactivar el auto:', error);
    res.status(500).json({ error: 'Error al desactivar el auto' });
  }
};

exports.updateCar = async (req, res) => {
  const carId = req.params.id; 
  const { brand, model, year, price, description, image } = req.body; 
  try {
    const car = await Car.findByPk(carId);
    if (!car) {
      return res.status(404).json({ error: 'Auto no encontrado' });
    }
    car.brand = brand;
    car.model = model;
    car.year = year;
    car.price = price;
    car.description = description;
    car.image = image;
    await car.save();
    res.status(200).json({ message: 'Auto actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el auto:', error);
    res.status(500).json({ error: 'Error al actualizar el auto' });
  }
};










