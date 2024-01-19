const StockEntry = require('../models/EntradaEstoque');
const StockExit = require('../models/SaidaEstoque');
const Product = require('../models/Produto');

const ProductController = {
    createProduct: async (req, res) => {
        try{
            const newProduct = await Product.create(req.body);
            res.json(newProduct);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllProducts: async (req, res) => {
        try {
            const products = await Product.findAll();
            res.json(products);
        } catch (error){
            res.status(500).send(error.message);
        }
    },

    getProductById: async (req, res) => {
        try {
            const product = await Product.findByPk(req.params.id);
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
            const product = await Product.findByPk(req.params.id);
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
    }

};

module.exports = ProductController;