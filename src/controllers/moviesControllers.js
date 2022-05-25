const { Personajes, Peliculas_Series, Generos } = require('../db')
// Traigo las tablas de la base de datos
const {Op} = require('sequelize');
// Traigo los operadores de sequelize


async function getMovies (req, res, next) {
    // funcion para traer todas las peliculas
    const { name, order, genre } = req.query;
    try{
        if(name){
            const peliculaName = await Peliculas_Series.findAll({ where:
                // busca todas las peliculas
                 { titulo:{[Op.iLike]:  `%${name}%`} },
                // donde el titulo de la pelicula sea igual al titulo que llega por parametro
                attributes: ['titulo', 'imagen'],
                // traigo todo el detalle de la pelicula
            })
            if(!peliculaName){
                res.status(404).send('No se encontro la pelicula');
            }
            return res.json(peliculaName);
        }
        if(order){
            const peliculaOrder = await Peliculas_Series.findAll({ order:
                // ordena las peliculas por el titulo
                [['fecha_creacion', order]]
            })
            if(!peliculaOrder){
                res.status(404).send('No se encontro la pelicula');
            }
            return res.json(peliculaOrder);
        }
        if(genre){
            // si pide el genero
        const peliGenre = await Generos.findAll({
            //trae 1 pelicula
            where: {genero_id: genre},
            // filtra por id
            attributes: ["nombre"],
            // trae los atributos que quiero
            include: [{model: Peliculas_Series, attributes: [ 'titulo'],
            // trae los generos para el filtro
            }],
        });
        return res.json(peliGenre);
        }
        const peliculas = await Peliculas_Series.findAll({
            // busco todas las peliculas
            attributes: ['titulo', 'imagen'],
            // traigo todo el detalle de la pelicula
        });
        res.json(peliculas);
    } catch (error) {
        next(error);
    }
}

const getMovie = async (req, res) => {
    // Funcion para traer una pelicula por id
    const { id } = req.params;
    // trae el id de la pelicula
    // trae la consulta del genero de la pelicula
    try{  
            // si no pide el genero
        const pelicula = await Peliculas_Series.findOne({
            //trae 1 pelicula
            where: {pelicula_serie_id: id,},

            attributes: ["titulo", "imagen", "fecha_creacion", "calificacion"],
            // filtra por id
            include: [{model: Generos, attributes: ['nombre'],}],
            // agrega los generos relacionado
        });
        return res.json(pelicula);
    } catch (error) {
        console.log(error);
    }
};

const addMovies = async (req, res, next) => {
    // Funcion para agregar una pelicula
    try{
        const {  imagen, titulo, fecha_creacion, calificacion, genero} = req.body;
    // trae los datos del body de la pelicula a agregar 
        const peliculaCreated = await Peliculas_Series.create({ 
            // crea la pelicula
            imagen: imagen,
            titulo: titulo,
            fecha_creacion: fecha_creacion, 
            calificacion: calificacion,
        });
        const peliculaGenero = await Generos.findAll({
            // trae los generos por id
            where: {genero_id: genero},
        });
        peliculaCreated.addGeneros(peliculaGenero);
        // relacion los personajes a la pelicula
        return res.json(peliculaCreated);
    } catch (error) {
        next(error);
    }
}

const updateMovies = async (req, res, next) => {
    // Funcion para actualizar una pelicula
    const { id } = req.params;
    // trae el id de la pelicula
    try{
        const {  imagen, titulo, fecha_creacion, calificacion, genero} = req.body;
    // trae los datos del body de la pelicula a agregar
        const peliculaUpdated = await Peliculas_Series.findOne({
            // busca la pelicula por id
            where: {pelicula_serie_id: id},
            // filtra por id
        })
        peliculaUpdated.imagen = imagen;
        peliculaUpdated.titulo = titulo;
        peliculaUpdated.fecha_creacion = fecha_creacion;
        peliculaUpdated.calificacion = calificacion;
        peliculaUpdated.save();
        // guarda los cambios
        const peliculaGenero = await Generos.findAll({
            // trae los generos por id
            where: {genero_id: genero},
        });
        peliculaUpdated.addGeneros(peliculaGenero);
        // relacion los generos a la pelicula
        return res.json(peliculaUpdated);
    }
    catch (error) {
        next(error);
    }
}


async function deleteMovies (req, res, next) {
    // Funcion para eliminar una pelicula
    try{
        const { id } = req.params;
        // trae el id de la pelicula
        const pelicula = await Peliculas_Series.destroy({
            // elimina la pelicula
            where: {pelicula_serie_id: id}
            // donde el id de la pelicula sea igual al id que llega por parametro
        });
        return res.json("pelicula eliminada");
    } catch (error) {
        next(error);
}}

// exportar las funciones
module.exports = {
    getMovies,
    getMovie,
    addMovies,
    updateMovies,
    deleteMovies
}