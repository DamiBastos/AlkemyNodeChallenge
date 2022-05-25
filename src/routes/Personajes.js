const { Router } = require('express');
// Traigo el modulo Router de express
const charactersCtrl = require('../controllers/charactersControllers');
// Traigo las funciones controladoras de personajes
const characters = Router();
// Le pongo el nombre que le quiero poner al modulo Router

characters.get('/characters', charactersCtrl.getCharacters );
// Ruta para traer todos los personajes
characters.get('/characters/:id', charactersCtrl.getCharacter);
// Ruta para traer un personaje por id o sus filtros
characters.post('/characters', charactersCtrl.addCharacter);
// Ruta para agregar un personaje
characters.put('/characters/:id', charactersCtrl.updateCharacter);
// Ruta para actualizar un personaje
characters.delete('/characters/:id', charactersCtrl.deleteCharacter);
// Ruta para eliminar un personaje


module.exports = characters;