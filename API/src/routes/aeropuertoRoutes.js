const express = require('express');
const router = express.Router();
const aeropuertoController = require('../controllers/aeropuertoController');

// Ruta GET para obtener todos los aeropuertos
router.get('/aeropuertos', aeropuertoController.getAeropuertos);

module.exports = router;
