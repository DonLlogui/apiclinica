const express = require('express');
const UsuarioControlador = require('../controlador/usuarioControlador');
const router = express.Router();

router.get('/usuarios', UsuarioControlador.todoUsuario);
router.get('/usuarioI/:id', UsuarioControlador.buscarPorId);
router.get('/usuarioIDE/:ide', UsuarioControlador.buscarPorIde);
router.get('/usuarioNOM/:nom', UsuarioControlador.buscarPorNombres);
router.get('/usuarioTEL/:tel', UsuarioControlador.buscarPorTelefono);
router.get('/usuarioEma/:ema', UsuarioControlador.buscarPorCorreo);
router.get('/usuarioRol/:r', UsuarioControlador.buscarPorRol);
router.post('/usuarios', UsuarioControlador.crearUsuario);
router.put('/usuarios', UsuarioControlador.editarUsuario);
router.delete('/usuarios/:id', UsuarioControlador.borrarUsuario);
module.exports = router; 