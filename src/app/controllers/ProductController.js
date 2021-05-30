const Product = require('../models/Product')
const { muntipleMongooseToObject } = require('../../until/mongoose')
const { mongooseToObject } = require('../../until/mongoose')

class ProductController {
    
    product(req, res) {
        Product.find({})
        .then(products => {
          res.render('products', { products: muntipleMongooseToObject(products) })
        })
        .catch(error => next(error))
    }
   
    // [POST] /products/:id
    update(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/admin'))
        .catch(next)
    }


     // [POST] /products/store
     store(req, res, next) {
       
        const formData = req.body
        const products = new Product(formData) 
      
        products.save() 

        .then(() => res.redirect('/products'))
        .catch(error => {

        })

    }
   
    // [GET] /courses/:slug
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug })
        .then(products => {
            res.render('products/show', { products: mongooseToObject(products) })
        })
        .catch(next)
    }
  

     // [DELETE] /courses/:id
     delete(req, res, next) {
        Product.delete({_id: req.params.id})
        .then(() => res.redirect('/admin'))
        .catch(next)
     }
     // [PATCH] /products/restore
     restore(req, res, next) {
        Product.restore({_id: req.params.id})
        .then(() => res.redirect('/admin'))
        .catch(next)
    }
   // [DELETE] /products/:id/force
    deleteForever(req, res, next) {
        Product.deleteOne({_id: req.params.id})
        .then(() => res.redirect('/admin'))
        .catch(next)
     }
    
}

module.exports = new ProductController