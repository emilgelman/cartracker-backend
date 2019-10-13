const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
	id : String,
	manufacturer: String,
	model: String,
	year: String,
	city : String,
	contact_name : String,
	date_added : String,
	date : String,
	img_url : String,
	merchant : Boolean,
	price : String,
	row_1 : String,
	row_2 : String,
	row_3 : Array,
	row_4 : Array,
	row_5 : Array,
});

module.exports = mongoose.model('Car', carSchema);
