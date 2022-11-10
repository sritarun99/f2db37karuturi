
var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var india_controller = require('../controllers/india'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/india', india_controller.india_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/india/:id', india_controller.india_delete); 
 
// PUT request to update Costume. 
router.put('/india/:id', india_controller.india_update_put); 
 
// GET request for one Costume. 
router.get('/india/:id', india_controller.india_detail); 
 
// GET request for list of all Costume items. 
router.get('/india', india_controller.india_list); 
 
module.exports = router; 
