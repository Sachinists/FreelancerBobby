var mongoose = require("mongoose")
var validators = require("mongoose-validators")
var Schema = mongoose.Schema
var schema = new Schema({
    _id : {type : Number, required : true, validate: validators.isNumeric()},
    xref_code : {type : Number, validate : validators.isNumeric()},
    xref_desc : {type : String}
})

module.exports = mongoose.model("XrefSchema",schema);    
