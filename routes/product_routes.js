const express = require('express');
const router = express.Router();
const productController = require('../controllers/Product/productController');
const stockController = require('../controllers/Stock/stockController');
const contractController = require('../controllers/Contract/contractController');

router.post('/produtos', productController.createProduct);

router.get('/produtos', productController.getAllProducts);

router.get('/produtos/:id', productController. getProductById);

router.put('/produtos/:id', productController.updateProduct);

router.delete('/produtos/:id', productController.deleteProduct);

router.post('/estoque/:id/entrada', stockController.registerEntry);

router.post('/estoque/:id/saida', stockController.registerExit);

router.post('/contrato/', contractController.contract_create);

router.post('/contrato/add/itens/', contractController.contracts_itens);

module.exports = router;