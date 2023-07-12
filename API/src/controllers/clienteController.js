const sql = require('mssql');

// Controlador para agregar o editar información del cliente
exports.guardarInformacion = async (req, res) => {
  const { dni, nombre, apellidos, direccion, telefono } = req.body;
  const idCredenciales = req.usuario.idCredenciales; // Suponiendo que tienes la información del usuario logueado disponible en req.usuario

  try {
    const request = new sql.Request();
    const query = `
      IF EXISTS (SELECT * FROM Cliente WHERE IDCredenciales = @idCredenciales)
      BEGIN
        UPDATE Cliente
        SET DNI = @dni, Nombre = @nombre, Apellidos = @apellidos, Dirección = @direccion, Teléfono = @telefono
        WHERE IDCredenciales = @idCredenciales
      END
      ELSE
      BEGIN
        INSERT INTO Cliente (DNI, Nombre, Apellidos, Dirección, Teléfono, IDCredenciales)
        VALUES (@dni, @nombre, @apellidos, @direccion, @telefono, @idCredenciales)
      END
    `;
    request.input('dni', sql.VarChar(10), dni);
    request.input('nombre', sql.VarChar(50), nombre);
    request.input('apellidos', sql.VarChar(50), apellidos);
    request.input('direccion', sql.VarChar(100), direccion);
    request.input('telefono', sql.VarChar(20), telefono);
    request.input('idCredenciales', sql.Int, idCredenciales);
    await request.query(query);

    res.status(200).json({ message: 'Información guardada correctamente' });
  } catch (error) {
    console.error('Error al guardar la información del cliente:', error);
    res.status(500).json({ error: 'Error al guardar la información del cliente' });
  }
};

// Controlador para obtener la información del cliente
exports.obtenerInformacion = async (req, res) => {
  const idCredenciales = req.usuario.idCredenciales; // Suponiendo que tienes la información del usuario logueado disponible en req.usuario

  try {
    const request = new sql.Request();
    const query = `SELECT * FROM Cliente WHERE IDCredenciales = @idCredenciales`;
    request.input('idCredenciales', sql.Int, idCredenciales);
    const result = await request.query(query);

    if (result.recordset.length === 0) {
      res.status(404).json({ error: 'No se encontró la información del cliente' });
    } else {
      const informacionCliente = result.recordset[0];
      res.status(200).json(informacionCliente);
    }
  } catch (error) {
    console.error('Error al obtener la información del cliente:', error);
    res.status(500).json({ error: 'Error al obtener la información del cliente' });
  }
};
