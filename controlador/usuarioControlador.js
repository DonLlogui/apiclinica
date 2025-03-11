const UsuarioModel = require('../modelo/usuarioModelo');

class UsuarioControlador {
  static async todoUsuario(req, res) {
    try {
      const user = await UsuarioModel.todoUsuario();
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener los usuarios' });
    }
  }

  static async buscarPorId(req, res) {
    const { id } = req.params;
    try {
      const user = await UsuarioModel.buscarPorId(id);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener el usuario' });
    }
  }

  static async buscarPorIde(req, res) {
    const { ide } = req.params;
    try {
      const user = await UsuarioModel.buscarPorIde(ide);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener el Usuario' });
    }
  }

  static async buscarPorNombres(req, res) {
    const { nombre } = req.params;
    try {
      const user = await UsuarioModel.buscarPorNombres(nombre);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener el Usuario' });
    }
  }
  
  static async buscarPorTelefono(req, res) {
    const { tel } = req.params;
    try {
      const user = await UsuarioModel.buscarPorTelefono(tel);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener el Usuario' });
    }
  }

  static async buscarPorCorreo(req, res) {
    const { email } = req.params;
    try {
      const user = await UsuarioModel.buscarPorCorreo(email);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener el Usuario' });
    }
  }

  static async buscarPorRol(req, res) {
    const { r } = req.params;
    try {
      const user = await UsuarioModel.buscarPorRol(r);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener el Usuario' });
    }
  }
  

  static async crearUsuario(req, res) {
    const { articulo } = req.body;
    try {
      const result = await UsuarioModel.crearUsuarios(ide, name, tel, email, contra);
      res.status(201).json({ message: 'Usuario creado', idUsuario: result.insertId });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al crear el usuario' });
    }
  }

  static async editarUsuario(req, res) {
    const { id } = req.params;
    const { ide } = req.body;
    const { name } = req.body;
    const { tel } = req.body;
    const { email } = req.body;
    const { contra } = req.body;
    try {
      const result = await UsuarioModel.modificarUsuario(ide, name, tel, email, contra, id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'usuario no encontrado' });
      }
      res.json({ message: 'Usuario actualizado' });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al actualizar el Usuario' });
    }
  }

  static async borrarUsuario(req, res) {
    const { id } = req.params;
    try {
      const result = await UsuarioModel.eliminarUsuario(id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json({ message: 'Usuario eliminado' });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al eliminar el Usuario' });
    }
  }
}

module.exports = UsuarioControlador;
