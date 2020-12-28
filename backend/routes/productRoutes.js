const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById } = require('../controller/productControllers');

//@desc GET all products
//@route GET /api/products
router.get('/', getAllProducts)

//@desc GET a single product
//@route GET /api/products/:id
router.get('/:id', getProductById)

module.exports = router;