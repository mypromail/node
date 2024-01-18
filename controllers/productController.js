const Produto = require('../models/Produto');
const StockEntry = require('../models/EntradaEstoque');
const StockExit = require('../models/SaidaEstoque');
const Product = require('../models/Produto');

const ProductController = {
    createProduct: async (req, res) => {
        try{
            const newProduct = await Produto.create(req.body);
            res.json(newProduct);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllProducts: async (req, res) => {
        try {
            const products = await Produto.findAll();
            res.json(products);
        } catch (error){
            res.status(500).send(error.message);
        }
    },

    getProductById: async (req, res) => {
        try {
            const product = await Produto.findByPk(req.params.id);
            if(!product) {
                return res.status(500).send('Produto não encontrado!');
            }
            res.json(product);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateProduct: async (req, res) => {
        try { 
            const product = await Produto.findByPk(req.params.id);
            if(!product){
                return res.status(404).send('Produto não encontrado!');
            }
            await product.update(req.body);
            res.send('Produto atualizado com sucesso!');    
    } catch ( error ) {
        res.status(500).send(error.message);
    }

},

    deleteProduct: async (req, res) => {
        try {
            const product = await Product.findByPk(req.params.id);
            if(!product){
                return res.status(404).send('Produto não encontrado!');
            }
            await product.destroy();
            res.send('Produto deletado com sucesso!');
        }  catch (error) {
            res.status(500).send(error.message);
        }
    },

    registerEntry: async (req, res) => {
        try {
            const { id_product, amount } = req.body;
            await StockEntry.create({ id_product, amount, entry_date: new DataTransfer() });
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
            await StockExit.create({ id_product, amount, exit_date: new Date() });
            res.send('Saída de estoque registrada com sucesso!');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

};

module.exports = ProductController;