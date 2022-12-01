var express = require('express');
var router = express.Router();
const india_controlers= require('../controllers/india'); 
// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET home page. */
router.get('/', india_controlers.india_view_all_Page);
/* GET detail india page */ 
router.get('/detail', india_controlers.india_view_one_Page); 
/* GET create india page */ 
router.get('/create',secured, india_controlers.india_create_Page); 
/* GET create update page */ 
router.get('/update',secured, india_controlers.india_update_Page); 
/* GET delete india page */ 
router.get('/delete',secured, india_controlers.india_delete_Page); 
  

module.exports = router;