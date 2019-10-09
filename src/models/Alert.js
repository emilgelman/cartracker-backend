const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const alertSchema = new mongoose.Schema({
	user_id: ObjectId,
	cars : Array
});


module.exports = mongoose.model('Alert', alertSchema);
