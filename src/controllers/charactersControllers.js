const { Personajes, Peliculas_Series, peliculas_series_personajes } = require('../db')
// Me traigo los modelos de la base de datos
const {Op} = require('sequelize');

//------------------Funciones controladoras de Personajes----------//

async function getCharacters (req, res, next) {
    // funcion para traer todos los personajes
    const {name, age, weight, movies} = req.query;
    try{
        if(name){
            const personajeName = await Personajes.findAll({ where:
                // busca todos los personajes
                { nombre:{[Op.iLike]:  `%${name}%`} },
                // donde el nombre del personaje sea igual al nombre que llega por parametro
                attributes: ['nombre', 'imagen'],
                // traigo todo el detalle del personaje
            })
            if(!personajeName.length){
                res.status(404).send('No se encontro el personaje');
            }
            return res.json(personajeName);
        }
        if(age){
            const personajeAge = await Personajes.findAll({ where:
                // busca todos los personajes
                {edad: age}
                // donde la edad del personaje sea igual a la edad que llega por parametro
            })
            if(!personajeAge.length){
                res.status(404).send('No se encontro el personaje con esa edad');
            }
            return res.json(personajeAge);
        }
        if(weight){
            const personajeWeight = await Personajes.findAll({ where:
                // busca todos los personajes
                {peso: weight}
                // donde el peso del personaje sea igual al peso que llega por parametro
            })
            if(!personajeWeight){
                res.status(404).send('No se encontro el personaje');
            }
            return res.json(personajeWeight);
        }
        if(movies){
            const peliculas = await Peliculas_Series.findAll({ where:
                // busca todos los personajes
                {pelicula_serie_id: movies },
                // donde el nombre del personaje sea igual al nombre que llega por parametro
                attributes: ['titulo'],
                // traigo todo el detalle del personaje
                include: {model: Personajes, attributes: ['nombre']}
            })
            if(!movies.length){
                res.status(404).send('No se encontro el personaje');
            }
            return res.json(peliculas);
        }


        const personajes = await Personajes.findAll({
            // busco todos los personajes
            attributes: ['nombre', 'imagen'],
            // traigo todo el detalle del personaje
        });
        if(!personajes){
            return res.json("No hay personajes");
        }
        return res.json(personajes);
    } catch (error) {
        next(error);
    }
}
    
async function getCharacter (req, res) {
    // funcion para traer un personaje por id 
    const { id } = req.params;
    // traigo el id de la url y lo guardo en la variable id
    try{
        const personaje = await Personajes.findOne({
            // busco 1 sólo personaje
            where: {personaje_id: id},
            // donde el id sea igual al id de la url
            attributes: ['nombre', 'imagen', 'edad', 'peso', 'historia'],
            // traigo todo el detalle del personaje
            include: [{model: Peliculas_Series, attributes: ['titulo'],}]
            // traigo las peliculas relacionadas
        });
        res.send(personaje);
    } catch (error) {
        console.log(error);
    }
};



async function addCharacter (req, res, next) {
    // funcion para agregar un personaje
    try{
        const { nombre, imagen, edad, peso, historia, pelicula_serie } = req.body;
        // traigo los datos del body
        const personaje = await Personajes.create({
            // busco o creo el personaje
                nombre: nombre,
                imagen: imagen,
                edad: edad,
                peso: peso,
                historia: historia,  
        });
        // creo el personaje con los datos del body
        const personajXpelicula = await Peliculas_Series.findAll({
            // busco las peliculas relacionadas
            where: {pelicula_serie_id: pelicula_serie}
            // donde el id de la pelicula se relacione
        });
        personaje.addPeliculas_Series(personajXpelicula);
        // agrego las peliculas relacionadas al personaje
        return res.json(personaje);
    } catch (error) {
        next(error);
    }
}

const updateCharacter = async (req, res, next) => {
    // funcion para actualizar un personaje
    try{
        const { id } = req.params;
        // traigo el id de la url
        const { nombre, imagen, edad, peso, historia, pelicula_serie } = req.body;
        // traigo los datos del body
        const personaje = await Personajes.findOne({
            // busco 1 sólo personaje
            where: {personaje_id: id},
            // donde el id sea igual al id de la url
        })
        // busco el personaje por id
        personaje.nombre = nombre;
        personaje.imagen = imagen;
        personaje.edad = edad;
        personaje.peso = peso;
        personaje.historia = historia;
        // actualizo los datos del personaje
        await personaje.save();
        // guardo los datos del personaje
        const personajXpelicula = await Peliculas_Series.findAll({
            // busco las peliculas relacionadas
            where: {pelicula_serie_id: pelicula_serie}
            // donde el id de la pelicula se relacione
        });
        personaje.addPeliculas_Series(personajXpelicula);
        // agrego las peliculas relacionadas al personaje
        return res.json(personaje);
    } catch (error) {
        next(error);
    }
    
}

async function deleteCharacter (req, res, next) {
    // funcion para eliminar un personaje
    try{
        const { id } = req.params;
        // traigo el id de la url
        const personaje = await Personajes.destroy({
            // elimino el personaje
            where: {personaje_id: id}
            // donde el id sea igual al id de la url
        });
        return res.json("personaje eliminado");
    } catch (error) {
        next(error);
    }
}

// exporto las funciones para poder usarlas en otros archivos
module.exports = {
    getCharacter,
    getCharacters,
    addCharacter,
    updateCharacter,
    deleteCharacter
}