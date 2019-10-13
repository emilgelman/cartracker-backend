const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const alertSchema = new mongoose.Schema({
	user_id: ObjectId,
	manufacturer : String,
	price : String,
	km : String,
	hand : String,
	engineval : String,
	cars : Array
});

module.exports = mongoose.model('Alert', alertSchema);
