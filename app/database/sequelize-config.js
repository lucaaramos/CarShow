require('dotenv').config(); 
// const initDatabase = require('./database')
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres', 
});

if (sequelize) {
  console.log('Instancia de Sequelize creada correctamente.');
} else {
  console.error('No se pudo crear la instancia de Sequelize.');
}


sequelize
  .authenticate()
  // initDatabase()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });

module.exports = sequelize;



