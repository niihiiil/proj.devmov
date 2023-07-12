const express = require('express');
const router = express.Router();
const credencialesController = require('../controllers/credencialesController');

// Ruta POST para registrar un nuevo usuario
router.post('/usuarios', credencialesController.registrarUsuario);

// Ruta POST para realizar el inicio de sesión
router.post('/login', credencialesController.login);

module.exports = router;
