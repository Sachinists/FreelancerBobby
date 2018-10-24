var mongoose = require("mongoose")
var validators = require("mongoose-validators")
var Schema = mongoose.Schema
var schema = new Schema({
    _id : {type : Number, required : true, validate: validators.isNumeric()},
    prisoner_id : {type : Number, validate : validators.isNumeric()},
    address1 : {type : String},
    city : {type : String},
    createdate : {type : String, validate : validators.isDate()}
})

module.exports = mongoose.model("PrisonersAddress",schema);    
