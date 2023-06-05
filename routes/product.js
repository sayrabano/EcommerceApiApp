const express = require('express')
//const {createProduct}  = require('.')
const {create,
    getProduct,
    updateProductQuantityById ,
    deleteProductById,
} = require('../controllers/productController')
const router = express.Router();

// router.route('/create').get(createProduct)
console.log('router loaded')
router.post('/create',create);
router.get('/',getProduct);
router.post('/:id/update_quantity',updateProductQuantityById)
router.delete('/:id',deleteProductById)

module.exports = router;