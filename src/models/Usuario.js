const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Usuario', {
        usuario_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlpha: {
                    msg: 'El nombre de usuario solo puede contener letras'
        },
        len: {
            args: [3, 15],
            msg: 'El nombre de usuario debe tener entre 3 y 15 caracteres'
        }
    }
},
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: 'El email no es válido'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [8, 255],
                    msg: 'La contraseña debe tener entre 8 y 15 caracteres'
                }
            }
        },
    });
}
