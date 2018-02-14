const router = require('express').Router();
const controller = require('./restaurant.controller');

// // // //

// GET /restaurants
router.get('/', controller.list);

// GET /restaurants/search
router.get('/search', controller.search);

// GET /restaurants/:id
router.get('/:id', controller.show);

// // // //

module.exports = router;
