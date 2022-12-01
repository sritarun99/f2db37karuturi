const india = require('../models/india');
var India = require('../models/india');

// List of all Costumes 
exports.india_list = async function (req, res) {
    try {
        theIndia = await India.find();
        res.send(theIndia);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Costume. 
exports.india_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await India.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


// Handle Costume create on POST. 
exports.india_create_post = async function (req, res) {
    console.log(req.body)
    let document = new India();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"State1":"Bihar", "Region":4, "State2":"Assam"} 
    document.State1 = req.body.State1;
    document.Region = req.body.Region;
    document.State2 = req.body.State2;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": "${err}"}`);
    }
}
// Handle Costume delete form on DELETE. 
exports.india_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await india.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle Costume update form on PUT. 
exports.india_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await India.findById(req.params.id)
        // Do updates of properties 
        if (req.body.State1)
            toUpdate.State1 = req.body.State1;
        if (req.body.Region) toUpdate.Region = req.body.Region;
        if (req.body.State2) toUpdate.State2 = req.body.State2;
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};
// VIEWS 
// Handle a show all view 
exports.india_view_all_Page = async function (req, res) {
    try {
        theIndia = await India.find();
        res.render('india', { title: 'India Search Results', results: theIndia });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}; 
// Handle a show one view with id specified by query 
exports.india_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await India.findById( req.query.id) 
        res.render('indiadetail',  
{ title: 'India Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.india_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('indiacreate', { title: 'India Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};
// Handle building the view for updating a costume. 
// query provides the id 
exports.india_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await India.findById(req.query.id) 
        res.render('indiaupdate', { title: 'India Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};  
// Handle a delete one view with id from query 
exports.india_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await India.findById(req.query.id) 
        res.render('indiadelete', { title: 'India Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 