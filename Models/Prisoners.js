var mongoose = require("mongoose")
var validators = require("mongoose-validators")
var Schema = mongoose.Schema
var schema = new Schema({
	_id: { type: Number, required: true, validate: validators.isNumeric() },
	surname: { type: String, validate: validators.isAlpha() },
	firstname: { type: String, validate: validators.isAlpha() },
	createdate: { type: String, validate: validators.isDate() },
	address: { type : Array , "default" : [] },
	sentence: { type : Array , "default" : [] }
})

module.exports = mongoose.model("Prisoners", schema);    