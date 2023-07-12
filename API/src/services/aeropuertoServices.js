const Aeropuerto = require('../middleware/aeropuertoModel');

// Servicio para obtener todos los aeropuertos
exports.getAeropuertos = async () => {
  try {
    const aeropuertos = await Aeropuerto.find();
    return aeropuertos;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener los aeropuertos');
  }
};
