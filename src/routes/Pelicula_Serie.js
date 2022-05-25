const { Router } = require('express');
// Traigo el modulo de express
const moviesControllers = require('../controllers/moviesControllers');
// Traigo las funciones controladoras de peliculas
const movies = Router();
// Creo una nueva ruta

movies.get('/movies', moviesControllers.getMovies);
// Ruta para traer todas las peliculas
movies.get('/movies/:id', moviesControllers.getMovie);
// Ruta para traer una pelicula por id o sus filtros
movies.post('/movies', moviesControllers.addMovies);
// Ruta para agregar una pelicula
movies.put('/movies/:id', moviesControllers.updateMovies);
// Ruta para actualizar una pelicula
movies.delete('/movies/:id', moviesControllers.deleteMovies);
// Ruta para eliminar una pelicula

module.exports = movies;