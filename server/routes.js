const router = require('express').Router()

// // // //

// Bootstrap API routers
router.use('/restaurants', require('./api/restaurant'))

// // // //

module.exports = router
