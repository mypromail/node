const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/sql_connection');

class Clients extends Model {}

Clients.init({
    id_client: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name_client:{
        type: DataTypes.TEXT
    },

    telephone:{
        type: DataTypes.TEXT
    },

    CEP:{
        type: DataTypes.TEXT
    },

    CPF:{
        type: DataTypes.TEXT
    },

    CNPJ:{
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    modelName: 'clients',
    timestamps: false
});

module.exports = Clients;