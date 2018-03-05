const router = require('express').Router()

// // // //

// Bootstrap API routers
router.use('/cities', require('./api/city'))
router.use('/restaurants', require('./api/restaurant'))
router.use('/violations', require('./api/violation'))

// // // //

module.exports = router
