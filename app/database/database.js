// database.js

 const sequelize = require('./sequelize-config');
if (sequelize) {
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log('Tablas sincronizadas con éxito');
    })
    .catch((error) => {
      console.error('Error al sincronizar tablas:', error);
    });
} else {
  console.error('No se pudo importar correctamente la instancia de Sequelize.');
}

