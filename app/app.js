const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database/sequelize-config');
const cors = require('cors');
const carRoutes = require('./routes/car');
const orderRoutes = require('./routes/order')
const userRoutes = require('./routes/user')
const app = express();
const corsOptions = {
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Habilita las cookies u otros encabezados específicos
};
app.use(bodyParser.json())
app.use(cors(corsOptions));


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
