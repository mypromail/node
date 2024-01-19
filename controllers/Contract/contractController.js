const Contract_Create = require('../../models/Contract/Contract');
const Contract_Itens = require('../../models/Contract/Contracts_Itens');

const contractController = {

    contract_create: async (req, res) => {
        try {
            await Contract_Create.create({ data_contrato: new Date() });
            res.send('Contrato registrado com sucesso!');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    contracts_itens: async (req, res) => {
        try {
            const { id_contrato, id_product, amount } = req.body;
            await Contract_Itens.create({ id_contrato, id_product, amount });
            res.send('Item adicionado ao contrato com sucesso!');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

};

module.exports = contractController;
