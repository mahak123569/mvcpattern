const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateProduct } = require('../config/controllers/productControllers');

router.get('/products', getProducts);
//product

router.post('/product', createProduct);
//get product

router.put('/product/:id', updateProduct);
//update product 

module.exports = router;





