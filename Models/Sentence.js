var mongoose = require("mongoose")
var validators = require("mongoose-validators")
var Schema = mongoose.Schema
var schema = new Schema({
    prisoner_id : {type : Number, validate : validators.isNumeric()},
    _id : {type : Number, required : true, validate: validators.isNumeric()},
    sentence_number : {type : String},
    sentence_comments : {type : String},
    createdate : {type : String, validate : validators.isDate()},
    vicitim_blob_id : { type :  Array },
    official_blob_id : { type : Array }
})

module.exports = mongoose.model("Sentence",schema);    
