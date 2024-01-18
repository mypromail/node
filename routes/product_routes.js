const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/produtos', productController.createProduct);

router.get('/produtos', productController.getAllProducts);

router.get('/produtos/:id', productController. getProductById);

router.put('/produtos/:id', productController.updateProduct);

router.delete('/produtos/:id', productController.deleteProduct);

router.post('/produtos/:id/entrada', productController.registerEntry);

router.post('/produtos/:id/saida', productController.registerExit);

module.exports = router;