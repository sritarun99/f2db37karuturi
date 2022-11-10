var India = require('../models/india'); 
 
// List of all Costumes 
exports.india_list = async function(req, res) 
{ 
    try{ 
        theIndia = await India.find(); 
        res.send(theIndia); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }    
}; 
 
// for a specific Costume. 
exports.india_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Indiadetail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.india_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new India(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.State1 = req.body.State1; 
    document.Region = req.body.Region; 
    document.State2 = req.body.State2; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}
// Handle Costume delete form on DELETE. 
exports.india_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: India delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.india_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: India update PUT' + req.params.id); 
};
// VIEWS 
// Handle a show all view 
exports.india_view_all_Page = async function(req, res) { 
    try{ 
        theIndia = await India.find(); 
        res.render('india', { title: 'India Search Results', results: theIndia }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 