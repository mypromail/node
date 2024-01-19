const StockEntry = require('../models/EntradaEstoque');
const StockExit = require('../models/SaidaEstoque');
const Product = require('../models/Produto');

const stockController = {

    registerEntry: async (req, res) => {
        try {
            const { id_product, amount } = req.body;
            await StockEntry.create({ id_product, amount, data_entrada: new Date() });
            res.send('Entrada de estoque registrada com sucesso!');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

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
    }

};

module.exports = stockController;