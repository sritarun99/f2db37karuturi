var express = require('express');
var router = express.Router();
const india_controlers= require('../controllers/india'); 

/* GET home page. */
router.get('/', india_controlers.india_view_all_Page );
/* GET detail india page */ 
router.get('/detail', india_controlers.india_view_one_Page); 
/* GET create india page */ 
router.get('/create', india_controlers.india_create_Page); 
/* GET create update page */ 
router.get('/update', india_controlers.india_update_Page); 
/* GET delete india page */ 
router.get('/delete', india_controlers.india_delete_Page); 
  

module.exports = router;