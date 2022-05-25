const { Router } = require('express');
const router = Router();

// const authRoute = require('./Auth');
const pelicula_serieRoute = require('./Pelicula_Serie');
const personajeRoute = require('./Personajes');
const usuarioRoute = require('./Usuario');

// router.use('/', authRoute);
router.use('/', pelicula_serieRoute);
router.use('/', personajeRoute);
router.use('/', usuarioRoute);








module.exports = router;