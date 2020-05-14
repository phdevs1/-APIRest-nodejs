const express = require('express');
const router = express.Router();
const { 
    getProducts, 
    addProducts,
    updateProduct,
    deleteProduct
} = require('../controllers/products')

//router.get('/', (req, res)=>{})
router.route('/')
    .get(getProducts)
    .post(addProducts);

router.route('/:id')
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router;