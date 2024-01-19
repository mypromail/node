const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const stockController = require('../controllers/stockController');

router.post('/produtos', productController.createProduct);

router.get('/produtos', productController.getAllProducts);

router.get('/produtos/:id', productController. getProductById);

router.put('/produtos/:id', productController.updateProduct);

router.delete('/produtos/:id', productController.deleteProduct);

router.post('/estoque/:id/entrada', stockController.registerEntry);

router.post('/estoque/:id/saida', stockController.registerExit);

module.exports = router;