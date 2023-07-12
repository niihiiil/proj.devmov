const sql = require('mssql');

// Controlador para obtener todos los vuelos
exports.obtenerVuelos = async (req, res) => {
  try {
    const request = new sql.Request();
    const query = `
      SELECT VueloID, CodigoUnico, FechaSalida, HoraSalida, FechaLlegada, HoraLlegada, AeropuertoSalidaID, AeropuertoLlegadaID, AvionID
      FROM Vuelo
    `;
    const result = await request.query(query);

    const vuelos = result.recordset;
    res.status(200).json(vuelos);
  } catch (error) {
    console.error('Error al obtener los vuelos:', error);
    res.status(500).json({ error: 'Error al obtener los vuelos' });
  }
};

// Controlador para obtener un vuelo por su ID
exports.obtenerVueloPorID = async (req, res) => {
  const vueloID = req.params.id;

  try {
    const request = new sql.Request();
    const query = `
      SELECT VueloID, CodigoUnico, FechaSalida, HoraSalida, FechaLlegada, HoraLlegada, AeropuertoSalidaID, AeropuertoLlegadaID, AvionID
      FROM Vuelo
      WHERE VueloID = @vueloID
    `;
    request.input('vueloID', sql.Int, vueloID);
    const result = await request.query(query);

    if (result.recordset.length === 0) {
      res.status(404).json({ error: 'No se encontró el vuelo' });
    } else {
      const vuelo = result.recordset[0];
      res.status(200).json(vuelo);
    }
  } catch (error) {
    console.error('Error al obtener el vuelo:', error);
    res.status(500).json({ error: 'Error al obtener el vuelo' });
  }
};
