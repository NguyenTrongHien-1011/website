const express = require('express')
const router = express.Router()


const productController = require('../app/controllers/ProductController')


//router.get('/search', siteController.search)

router.delete('/:id', productController.delete)
router.put('/:id', productController.update)
router.patch('/:id/restore', productController.restore)
router.delete('/:id/force', productController.deleteForever)
//router.get('/cart', productController.cart)
router.post('/store', productController.store)
router.get('/:slug', productController.show)

router.get('/', productController.product)

module.exports = router