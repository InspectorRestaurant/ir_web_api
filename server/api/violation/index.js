const router = require('express').Router();
const controller = require('./violation.controller');

// // // //

// GET /violations
router.get('/', controller.list);

// // // //

module.exports = router;
