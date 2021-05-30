class SiteController {
    
    home(req, res) {
        res.render('home')
    }
    contact(req, res) {
        res.render('contact')
    }
    aboutUs(req, res) {
        res.render('aboutUs')
    }
    location(req, res) {
        res.render('location')
    }
    login(req, res) {
        res.render('login')
    }
   
   
   
    
}

module.exports = new SiteController