const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateProduct } = require('../config/controllers/productControllers');

router.get('/products', getProducts);
//product

router.post('/product', createProduct);

router.put('/product/:id', updateProduct);

module.exports = router;





