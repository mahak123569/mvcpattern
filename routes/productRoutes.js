const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateProduct } = require('../config/controllers/productController');

router.get('/products', getProducts);


router.post('/product', createProduct);


// router.put('/product/:id', updateProduct);
//update product 

router.put('/products/:id', updateProduct);

module.exports = router;







