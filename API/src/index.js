const express = require('express');
const aeropuertoRoutes = require('./routes/aeropuertoRoutes');
const credencialesRoutes = require('./routes/credencialesRoutes');
const vuelosRoutes = require('./routes/vuelosRoutes');
const reservaRoutes = require('./routes/reservaRoutes');
const sql = require('mssql');
const dbConfig = require('./database/dbConfig');

// Configuración del servidor Express
const app = express();
const PORT = 3000;

const connectionConfig = {
  ...dbConfig,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// Conexión a SQL Server
sql
  .connect(connectionConfig)
  .then(() => console.log('Conexión exitosa con SQL Server'))
  .catch((err) => console.error('Error al conectar con SQL Server', err));

// Rutas de la API
app.use('/api/aeropuertos', aeropuertoRoutes);
app.use('/api/credenciales', credencialesRoutes);
app.use('/api/vuelos', vuelosRoutes);
app.use('/api/reserva', reservaRoutes);

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de Aeropuertos!');
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
