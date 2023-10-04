const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database/sequelize-config'); // Importa la instancia de Sequelize
const carRoutes = require('./routes/car');
const orderRoutes = require('./routes/order')
const userRoutes = require('./routes/user')
const app = express();

app.use(bodyParser.json());


app.use('/api', carRoutes);
app.use('/api', orderRoutes);
app.use('/api', userRoutes);



const port = process.env.PORT || 3000;
sequelize.sync({ force: false })
  .then(() => {
    console.log('Tablas sincronizadas con éxito');
    app.listen(port, () => {
      console.log(`Servidor en ejecución en el puerto ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar tablas:', error);
  });
