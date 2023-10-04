const User  = require('../models/user'); 
const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize-config');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        status: '1'
      }
    }); 
    res.status(200).json(users); 
  } catch (error) {
    console.error('Error al obtener todos los usuarios:', error);
    res.status(500).json({ error: 'Error al obtener todos los usuarios' });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, isAdmin, registrationDate } = req.body; 
    const newUser = await User.create({ name, email, password, isAdmin, registrationDate });
    res.status(201).json(newUser); 
  } catch (error) {
    console.error('Error al crear un nuevo usuario:', error);
    res.status(500).json({ error: 'Error al crear un nuevo usuario' });
  }
};


exports.desactivateUser = async (req, res) => {
  try {
    const userId = req.params.id; 
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    user.status = '0';
    await user.save();
    res.status(204).send('Usuario eliminado exitosamente'); 
  } catch (error) {
    console.error('Error al desactivar un usuario:', error);
    res.status(500).json({ error: 'Error al desactivar un usuario' });
  }
};
