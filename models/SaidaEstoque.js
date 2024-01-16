const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sql_connection');

class SaidaEstoque extends Model {}

SaidaEstoque.init({
    id_saida: {
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
    data_saida:{
        type: DataTypes.DATE
    }
}, {
    sequelize,
    modelName: 'saidaEstoque',
    timestamps: false
});

module.exports = SaidaEstoque;