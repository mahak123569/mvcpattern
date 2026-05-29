const express = require('express');
const router = express.Router();
const { getProducts } = require('../config/controllers/productControllers');

router.get('/products', getProducts);

module.exports = router;






