const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
	username: String,
	manufacturer : String,
	model : String,
	price : String,
	km : String,
	hand : String,
	engineval : String,
	cars : Array
});

module.exports = mongoose.model('Alert', alertSchema);
