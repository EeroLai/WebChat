var express = require('express');
var router = express.Router();
var indexController = require('../controllers/api/indexController');

/* GET users listing. */
router.get('/', indexController.index);

module.exports = router;
