const sql = require('mssql');

// Controlador para guardar una nueva reserva
exports.guardarReserva = async (req, res) => {
  const { clienteID, vueloID, numPlazas } = req.body;

  try {
    const request = new sql.Request();
    const query = `
      INSERT INTO Reserva (ClienteID, VueloID, NumPlazas)
      VALUES (@clienteID, @vueloID, @numPlazas)
    `;
    request.input('clienteID', sql.Int, clienteID);
    request.input('vueloID', sql.Int, vueloID);
    request.input('numPlazas', sql.Int, numPlazas);
    await request.query(query);

    res.status(200).json({ message: 'Reserva guardada exitosamente' });
  } catch (error) {
    console.error('Error al guardar la reserva:', error);
    res.status(500).json({ error: 'Error al guardar la reserva' });
  }
};
