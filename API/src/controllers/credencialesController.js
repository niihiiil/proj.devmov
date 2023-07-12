const sql = require('mssql');

// Controlador para registrar un nuevo usuario
exports.registrarUsuario = async (req, res) => {
  const { usuario, contraseña } = req.body;

  try {
    const request = new sql.Request();
    const query = `INSERT INTO Credenciales (Usuario, Contraseña) VALUES (@usuario, @contraseña)`;
    request.input('usuario', sql.VarChar(50), usuario);
    request.input('contraseña', sql.VarChar(100), contraseña);
    await request.query(query);

    res.status(200).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
};

// Controlador para validar el inicio de sesión
exports.login = async (req, res) => {
  const { usuario, contraseña } = req.body;

  try {
    const request = new sql.Request();
    const query = `SELECT COUNT(*) AS count FROM Credenciales WHERE Usuario = @usuario AND Contraseña = @contraseña`;
    request.input('usuario', sql.VarChar(50), usuario);
    request.input('contraseña', sql.VarChar(100), contraseña);
    const result = await request.query(query);

    const count = result.recordset[0].count;
    if (count === 1) {
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  } catch (error) {
    console.error('Error al realizar el inicio de sesión:', error);
    res.status(500).json({ error: 'Error al realizar el inicio de sesión' });
  }
};
