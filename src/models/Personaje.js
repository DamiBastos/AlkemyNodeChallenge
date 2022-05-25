const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Personajes', {
        personaje_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        peso: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        historia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
}