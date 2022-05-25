const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Generos', {
        genero_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false,
    }
}
);
}