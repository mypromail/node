const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sql_connection');

class Product extends Model {}

Product.init({
    id_product: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_product: { 
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.TEXT
    },
    preco_unitario: {
        type: DataTypes.DECIMAL
    }
}, {
    sequelize,
    modelsName: 'products',
    timestamps: false   
});

module.exports = Product;