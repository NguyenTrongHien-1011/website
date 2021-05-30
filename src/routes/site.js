const express = require('express')
const router = express.Router()


const siteController = require('../app/controllers/SiteController')


//router.get('/search', siteController.search)
router.get('/', siteController.home)
router.get('/contact', siteController.contact)
router.get('/aboutUs', siteController.aboutUs)
router.get('/location', siteController.location)
router.get('/login', siteController.login)



module.exports = router