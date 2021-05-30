const siteRouter = require('./site')
const productRouter = require('./product')
const adminRouter = require('./admin')


function route(app) {
 
   
    app.use('/', siteRouter)
    app.use('/admin', adminRouter)
    app.use('/products', productRouter)
   

}
module.exports = route