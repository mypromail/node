const express = require('express');
const router = express.Router();
const productController = require('../controllers/Product/productController');
const stockController = require('../controllers/Stock/stockController');
const contractController = require('../controllers/Contract/contractController');
const ClientController = require('../controllers/Client/clientController');

//PRODUTOS

router.post('/produtos', productController.createProduct);

router.get('/produtos', productController.getAllProducts);

router.get('/produtos/:id', productController. getProductById);

router.put('/produtos/:id', productController.updateProduct);

router.delete('/produtos/:id', productController.deleteProduct);


//ESTOQUE ENTRADA

router.post('/estoque/:id/entrada', stockController.registerEntry);

router.get('/estoque/entrada', stockController.getAllStockEntrys);

router.get('/estoque/entrada/:id', stockController.getStockEntryById);

router.put('/estoque/entrada/:id', stockController.updateStockEntry);

router.delete('/estoque/entrada/:id', stockController.deleteStockEntry);

//ESTOQUE SAIDA

router.post('/estoque/:id/saida', stockController.registerExit);

router.get('/estoque/saida', stockController.getAllStockExits);

router.get('/estoque/saida/:id', stockController.getStockExitById);

router.put('/estoque/saida/:id', stockController.updateStockExit);

router.delete('/estoque/saida/:id', stockController.deleteStockExit);

//CONTRATO

router.post('/contrato/', contractController.contract_create);

router.post('/contrato/add/itens/', contractController.contracts_itens);

router.get('/contrato', contractController.getAllContracts);

router.get('/contrato/:id', contractController.getContractById);

router.put('/contrato/:id', contractController.updateContract);

router.delete('/contrato/:id', contractController.deleteContract);

//CLIENTES

router.post('/clientes', ClientController.createClient);

router.get('/clientes', ClientController.getAllClients);

router.get('/clientes/:id', ClientController.getClientById);

router.put('/clientes/:id', ClientController.updateClient);

router.delete('/clientes/:id', ClientController.deleteClient);

module.exports = router;