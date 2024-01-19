const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/sql_connection');

class SaidaEstoque extends Model {}

SaidaEstoque.init({
    id_saida: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_product: {
        type: DataTypes.INTEGER,
        references: {
            models: 'products',
            key: 'id_product'
        }
    },
    amount: {
        type: DataTypes.INTEGER
    },
    data_saida:{
        type: DataTypes.DATE
    }
}, {
    sequelize,
    modelName: 'saidaestoques',
    timestamps: false
});

module.exports = SaidaEstoque;