const StockEntry = require('../../models/Stock/EntradaEstoque');
const StockExit = require('../../models/Stock/SaidaEstoque');
const Product = require('../../models/Product/Produto');

const stockController = {

//ESTOQUE ENTRADA

    registerEntry: async (req, res) => {
        try {
            const { id_product, amount } = req.body;
            await StockEntry.create({ id_product, amount, data_entrada: new Date() });
            res.send('Entrada de estoque registrada com sucesso!');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllStockEntrys: async (req, res) => {
        try {
            const StockEntrysInstance = await StockEntry.findAll();
            res.json(StockEntrysInstance);
        } catch (error){
            res.status(500).send(error.message);
        }
    },

    getStockEntryById: async (req, res) => {
        try {
            const StockEntryInstance = await StockEntry.findByPk(req.params.id);
            if(!StockEntryInstance) {
                return res.status(500).send('Entrada Estoque não encontrado!');
            }
            res.json(StockEntryInstance);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateStockEntry: async (req, res) => {
        try { 
            const StockEntryInstance = await StockEntry.findByPk(req.params.id);
            if(!StockEntryInstance){
                return res.status(404).send('Entrada Estoque não encontrado!');
            }
            await StockEntryInstance.update(req.body);
            res.send('Entrada Estoque atualizado com sucesso!');    
    } catch ( error ) {
        res.status(500).send(error.message);
    }

},

    deleteStockEntry: async (req, res) => {
        try {
            const StockEntryInstance = await StockEntry.findByPk(req.params.id);
            if(!StockEntryInstance){
                return res.status(404).send('Entrada Estoque não encontrado!');
            }
            await StockEntryInstance.destroy();
            res.send('Entrada Estoque deletado com sucesso!');
        }  catch (error) {
            res.status(500).send(error.message);
        }
    },

    //ESTOQUE SAIDA

    registerExit: async (req, res) => {
        try {
            const { id_product, amount } = req.body;
            const product = await Product.findByPk(id_product);
            if(!product){
                return res.status(404).send('Produto não encontrado!');
            }
            
            const TotalEntry = await StockEntry.sum('amount', { where: { id_product }});
            const TotalExit = await StockExit.sum('amount', { where: { id_product }});
            const currentBalance = TotalEntry - TotalExit;

            if(amount > currentBalance){
                return res.status(404).send('Estoque Insuficiente!');
            }
            await StockExit.create({ id_product, amount, data_saida: new Date() });
            res.send('Saída de estoque registrada com sucesso!');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllStockExits: async (req, res) => {
        try {
            const StockExits = await StockExit.findAll();
            res.json(StockExits);
        } catch (error){
            res.status(500).send(error.message);
        }
    },
    
    getStockExitById: async (req, res) => {
        try {
            const StockExitInstance = await StockExit.findByPk(req.params.id);
            if(!StockExitInstance) {
                return res.status(500).send('Saida Estoque não encontrado!');
            }
            res.json(StockExitInstance);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    
    updateStockExit: async (req, res) => {
        try { 
            const StockExitInstance = await StockExit.findByPk(req.params.id);
            if(!StockExitInstance){
                return res.status(404).send('Saida Estoque não encontrado!');
            }
            await StockExitInstance.update(req.body);
            res.send('Saida Estoque atualizado com sucesso!');    
    } catch ( error ) {
        res.status(500).send(error.message);
    }
    
    },
    
    deleteStockExit: async (req, res) => {
        try {
            const StockExitInstance = await StockExit.findByPk(req.params.id);
            if(!StockExitInstance){
                return res.status(404).send('Saida Estoque não encontrado!');
            }
            await StockExitInstance.destroy();
            res.send('Saida Estoque deletado com sucesso!');
        }  catch (error) {
            res.status(500).send(error.message);
        }
    }

};

module.exports = stockController;