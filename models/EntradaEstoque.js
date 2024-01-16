const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sql_connection');

class EntradaEstoque extends Model {}

EntradaEstoque.init({
    id_entrada: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_produto: {
        type: DataTypes.INTEGER,
        references: {
            models: 'product',
            key: 'id_product'
        }
    },
    quantidade: {
        type: DataTypes.INTEGER
    },
    data_entrada:{
        type: DataTypes.DATE
    }
}, {
    sequelize,
    modelName: 'entradaEstoque',
    timestamps: false
});

module.exports = EntradaEstoque;