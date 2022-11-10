const mongoose = require("mongoose") 
const indiaSchema = mongoose.Schema({ 
 State1: String,
 Region: Number,  
 State2: String 
 
}) 
 
module.exports = mongoose.model("India", 
indiaSchema) 