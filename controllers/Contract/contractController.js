const Contract_Create = require('../../models/Contract/Contract');
const Contract_Itens = require('../../models/Contract/Contracts_Itens');


const contractController = {

    contract_create: async (req, res) => {
        try {

            const { id_client } = req.body;
            if(!id_client){
                res.send('CLIENTE TA NULO O SEU MERDA');
            }

            await Contract_Create.create({ id_client, data_contrato: new Date() });
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
    },

    getAllContracts: async (req, res) => {
        try {
            const Contracts = await Contract_Create.findAll();
            res.json(Contracts);
        } catch (error){
            res.status(500).send(error.message);
        }
    },

    getAllContractsItens: async (req, res) => {
        try {
            const Contracts = await Contract_Itens.findAll();
            res.json(Contracts);
        } catch (error){
            res.status(500).send(error.message);
        }
    },

    getContractById: async (req, res) => {
        try {
            const Contract = await Contract_Create.findByPk(req.params.id);
            if(!Contract) {
                return res.status(500).send('Contrato não encontrado!');
            }
            res.json(Contract);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateContract: async (req, res) => {
        try { 
            const Contract = await Contract_Create.findByPk(req.params.id);
            if(!Contract){
                return res.status(404).send('Contrato não encontrado!');
            }
            await Contract.update(req.body);
            res.send('Contrato atualizado com sucesso!');    
    } catch ( error ) {
        res.status(500).send(error.message);
    }

},

    deleteContract: async (req, res) => {
        try {
            const Contract = await Contract_Create.findByPk(req.params.id);
            if(!Contract){
                return res.status(404).send('Contrato não encontrado!');
            }
            await Contract.destroy();
            res.send('Contrato deletado com sucesso!');
        }  catch (error) {
            res.status(500).send(error.message);
        }
    }

};

module.exports = contractController;
