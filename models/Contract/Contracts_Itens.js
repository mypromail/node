const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/sql_connection');

class Contract_Itens extends Model {}

Contract_Itens.init({
    id_contract_item: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    id_contrato: {
        type: DataTypes.INTEGER
    },

    id_product: {
        type: DataTypes.INTEGER
    },

    amount: {
        type: DataTypes.INTEGER
    }
    

    
}, {
    sequelize,
    modelName: 'contract_items',
    timestamps: false
});

module.exports = Contract_Itens;