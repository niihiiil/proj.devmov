const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const authMiddleware = require('../middlewares/authMiddleware');

// Ruta POST para guardar o editar la información del cliente
router.post('/cliente', authMiddleware, clienteController.guardarInformacion);

// Ruta GET para obtener la información del cliente
router.get('/cliente', authMiddleware, clienteController.obtenerInformacion);

module.exports = router;
