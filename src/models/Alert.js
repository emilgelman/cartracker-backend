const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
	username: String,
	manufacturer : String,
	manufacturer_text : String,
	model : String,
	model_text : String,
	price : String,
	km : String,
	hand : String,
	engineval : String,
	year : String,
	cars : Array
});

module.exports = mongoose.model('Alert', alertSchema);
