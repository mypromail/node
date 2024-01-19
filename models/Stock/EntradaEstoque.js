const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/sql_connection');

class EntradaEstoque extends Model {}

EntradaEstoque.init({
    id_entrada: {
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
    data_entrada:{
        type: DataTypes.DATE
    }
}, {
    sequelize,
    modelName: 'entradaestoques',
    timestamps: false
});

module.exports = EntradaEstoque;