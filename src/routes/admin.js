const express = require('express')
const router = express.Router()


const adminController = require('../app/controllers/AdminController')


//router.get('/search', siteController.search)

router.get('/', adminController.admin)
router.get('/:id/', adminController.admin)

module.exports = router