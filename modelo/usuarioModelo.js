const dbService = require('./bd/Conexion');

class usuarioModelo {
  // Obtener todos los usuarios con paginación
  static async todoUsuario(pagina = 1) {
    const limite = 50;  // Número máximo de productos por página
    const offset = (pagina - 1) * limite;  // Calculamos el offset para la paginación
    const query = `SELECT * FROM usuarios ORDER BY idUsuario ASC LIMIT ${limite} OFFSET ${offset}`;
    try {
      return await dbService.query(query);
    } catch (err) {
      throw new Error(`Error al obtener los usuarios: ${err.message}`);
    }
  }

  // Buscar usuario por ID
  static async buscarPorId(id) {
    const query = 'SELECT * FROM usuarios WHERE idUsuario = ?';
    try {
      const [user] = await dbService.query(query, [id]);
      return user || null;  // Devuelve null si no hay usuario
    } catch (err) {
      throw new Error(`Error al buscar el usuario por ID: ${err.message}`);
    }
  }

  // Buscar usuario por identificación (autocompletado)
  static async buscarPorIde(ide) {
    const query = 'SELECT * FROM usuarios WHERE identificacion LIKE ?';
    try {
      return await dbService.query(query, [`%${ide}%`]);
    } catch (err) {
      throw new Error(`Error al buscar el usuario por identificación: ${err.message}`);
    }
  }

  // Buscar usuario por nombres (autocompletado)
  static async buscarPorNombres(name) {
    const query = 'SELECT * FROM usuarios WHERE nombres LIKE ?';
    try {
      return await dbService.query(query, [`%${name}%`]);
    } catch (err) {
      throw new Error(`Error al buscar el usuario por nombre: ${err.message}`);
    }
  }

  // Buscar usuario por teléfono (autocompletado)
  static async buscarPorTelefono(tel) {
    const query = 'SELECT * FROM usuarios WHERE telefono LIKE ?';
    try {
      return await dbService.query(query, [`%${tel}%`]);
    } catch (err) {
      throw new Error(`Error al buscar el usuario por teléfono: ${err.message}`);
    }
  }

  // Buscar usuario por correo (autocompletado)
  static async buscarPorCorreo(email) {
    const query = 'SELECT * FROM usuarios WHERE correo LIKE ?';
    try {
      return await dbService.query(query, [`%${email}%`]);
    } catch (err) {
      throw new Error(`Error al buscar el usuario por correo: ${err.message}`);
    }
  }

  // Buscar usuario por rol (autocompletado)
  static async buscarPorRol(r) {
    const query = 'SELECT * FROM usuarios WHERE rol LIKE ?';
    try {
      return await dbService.query(query, [`%${r}%`]);
    } catch (err) {
      throw new Error(`Error al buscar el usuario por rol: ${err.message}`);
    }
  }

  // Crear un nuevo usuario
  static async crearUsuarios(ide, name, tel, email, contra) {
    const query = 'INSERT INTO usuarios (identificacion, nombres, telefono, correo, contrasena, rol, estado) VALUES (?, ?, ?, ?, ?, ?, ?)';
    try {
      return await dbService.query(query, [ide, name, tel, email, contra, "usuario", "Activo"]);
    } catch (err) {
      throw new Error(`Error al crear el usuario: ${err.message}`);
    }
  }

  // Modificar un usuario existente
  static async modificarUsuario(id, ide, name, tel, email, contra) {
    const query = 'UPDATE usuarios SET identificacion = ?, nombres = ?, telefono = ?, correo = ?, contrasena = ? WHERE idUsuario = ?';
    try {
      return await dbService.query(query, [ide, name, tel, email, contra, id]);
    } catch (err) {
      throw new Error(`Error al modificar el usuario: ${err.message}`);
    }
  }

  // Eliminar un usuario
  static async eliminarUsuario(id) {
    const query = 'DELETE FROM usuarios WHERE idUsuario = ?';
    try {
      return await dbService.query(query, [id]);
    } catch (err) {
      throw new Error(`Error al eliminar el usuario: ${err.message}`);
    }
  }
}

module.exports = usuarioModelo;
