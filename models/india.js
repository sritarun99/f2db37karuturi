const mongoose = require("mongoose") 
const indiaSchema = mongoose.Schema({ 
 State1: {
    type:String,
    enum:["Andhra","Karnataka","Haryana"]
 },
 
 Region: {
    type:Number,
    min:10,
    max:100
 },  
 State2: String 
 
}) 
 
module.exports = mongoose.model("India", 
indiaSchema) 