const Contract_Create = require('../../models/Contract/Contract');

const contractController = {

    contract_create: async (req, res) => {
        try {
            await Contract_Create.create({ data_contrato: new Date() });
            res.send('Contrato registrado com sucesso!');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

};

module.exports = contractController;
