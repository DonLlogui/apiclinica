const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./router/UsuarioRouter');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4545;

// Middleware
app.use(cors({
  origin: '*', // Cambiar ['http://tu.com', 'http://yo.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  credentials: true // Habilita el envío de credenciales si es necesario
}));

// Middleware para parseo de solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de productos
app.use('/', usuarioRoutes);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Algo salió mal, por favor intente de nuevo más tarde.' });
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
  });

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
