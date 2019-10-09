const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
	id : String,
	manufacturer: String,
	model: String,
	year: String

});

module.exports = mongoose.model('Car', carSchema);
