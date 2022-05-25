const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Peliculas_Series', {
        pelicula_serie_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING,
        },
        titulo: {
            type: DataTypes.STRING,
        },
        fecha_creacion: {
            type: DataTypes.STRING,
        },
        calificacion: {
            type: DataTypes.INTEGER,
            validate:{
                min: 1,
                max: 5
            },
        },
    });
}