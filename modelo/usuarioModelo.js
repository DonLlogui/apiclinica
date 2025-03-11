const dbService = require('./bd/Conexion');

class usuarioModelo {
  static async todoUsuario(pagina = 1) {
    //pagina = 1;
    const limite = 50;  // Número máximo de productos por página
    const offset = (pagina - 1) * limite;  // Calculamos el offset para la paginación
    //const query = 'SELECT * FROM usuario ORDER BY idProducto ASC';
    const query = `SELECT * FROM usuarios ORDER BY idUsuario ASC LIMIT ${limite} OFFSET ${offset}`;
    try {
      return await dbService.query(query);
    } catch (err) {
      throw err;
    }
  }

  static async buscarPorId(id) {
    const query = 'SELECT * FROM usuarios WHERE idUsuario = ?';
    try {
      const [user] = await dbService.query(query, [id]);
      return user || null; // ← Asegurar que devuelva `null` si no hay usuario
    } catch (err) {
      throw err;
    }
  }

  static async buscarPorIde(ide) {
    const query = 'SELECT * FROM usuarios WHERE identificacion LIKE ?';
    try {
      return await dbService.query(query, [`%${ide}%`]);
    } catch (err) {
      throw err;
    }
  }

  static async buscarPorNombres(name) {
    const query = 'SELECT * FROM usuarios WHERE nombres LIKE ?';
    try {
      return await dbService.query(query, [`%${name}%`]);
    } catch (err) {
      throw err;
    }
  }

  static async buscarPorTelefono(tel) {
    const query = 'SELECT * FROM usuarios WHERE telefono LIKE ?';
    try {
      return await dbService.query(query, [`%${tel}%`]);
    } catch (err) {
      throw err;
    }
  }

  static async buscarPorCorreo(email) {
    const query = 'SELECT * FROM usuarios WHERE correo LIKE ?';
    try {
      return await dbService.query(query, [`%${email}%`]);
    } catch (err) {
      throw err;
    }
  }

  static async buscarPorRol(r) {
    const query = 'SELECT * FROM usuarios WHERE rol LIKE ?';
    try {
      return await dbService.query(query, [`%${r}%`]);
    } catch (err) {
      throw err;
    }
  }

  static async crearUsuarios(ide, name, tel, email, contra) {
    const query = 'INSERT INTO usuarios (idUsuario, identificacion, nombres, telefono, correo, contrasena, rol, estado) VALUES (?, ?, ?, ?, ?, ?, ? , ?)';
    try {
      return await dbService.query(query, [ide, name, tel, email, contra, "usuario", "Activo"]);
    } catch (err) {
      throw err;
    }
  }

  static async modificarUsuario(ide, name, tel, email, contra) {
    const query = 'UPDATE usuarios SET identificacion = ?, nombres = ?, telefono= ?, correo = ?, contrasena = ? WHERE idUsuario = ?';
    try {
      return await dbService.query(query, [ide, name, tel, email, contra]);
    } catch (err) {
      throw err;
    }
  }

  static async eliminarUsuario(id) {
    const query = 'DELETE FROM usuarios WHERE idUsuario = ?';
    try {
      return await dbService.query(query, [id]);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = usuarioModelo;