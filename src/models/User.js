const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	alerts : Array
});

module.exports = mongoose.model('User', userSchema)
