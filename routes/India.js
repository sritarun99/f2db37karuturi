var express = require('express');
var router = express.Router();
const india_controlers= require('../controllers/india'); 

/* GET home page. */
router.get('/', india_controlers.india_view_all_Page ); 

module.exports = router;