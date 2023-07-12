const express = require('express');
const router = express.Router();
const vueloController = require('../controllers/vueloController');

// Ruta GET para obtener todos los vuelos
router.get('/vuelos', vueloController.obtenerVuelos);

// Ruta GET para obtener un vuelo por su ID
router.get('/vuelos/:id', vueloController.obtenerVueloPorID);

module.exports = router;
