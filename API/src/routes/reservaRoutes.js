const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

// Ruta POST para guardar una nueva reserva
router.post('/reservas', reservaController.guardarReserva);

module.exports = router;
