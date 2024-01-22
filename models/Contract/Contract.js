const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/sql_connection');

class Contract extends Model {}

Contract.init({
    id_contrato: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    id_client: {
        type: DataTypes.INTEGER
    },

    data_contrato:{
        type: DataTypes.DATE
    }
}, {
    sequelize,
    modelName: 'contracts',
    timestamps: false
});

module.exports = Contract;