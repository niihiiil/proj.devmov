const sql = require('mssql');
const dbConfig = require('../database/dbConfig');

exports.getAeropuertos = async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request().query('SELECT * FROM Aeropuerto');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error al obtener los aeropuertos:', error);
    res.status(500).json({ error: 'Error al obtener los aeropuertos' });
  }
};
