const Product = require('../models/Product')
const { muntipleMongooseToObject } = require('../../until/mongoose')
const { mongooseToObject } = require('../../until/mongoose')


class AdminController {
   
    admin(req, res, next) {
        Promise.all([Product.findById(req.params.id), Product.findDeleted({}),Product.find({}),Product.countDocumentsDeleted()])
        .then(([productEdit,productDelete,products, deleteCount]) =>
        res.render('admin', {
            deleteCount,
            productEdit: mongooseToObject(productEdit),
            productDelete: muntipleMongooseToObject(productDelete),
            products: muntipleMongooseToObject(products),
            
        })
        )
        .catch(error => next(error))
        
    }
    
}
module.exports = new AdminController