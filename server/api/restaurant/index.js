const router = require('express').Router();
const controller = require('./restaurant.controller');

// // // //

// GET /restaurants
router.get('/', controller.list);

// // // //

module.exports = router;
