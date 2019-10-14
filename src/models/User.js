const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	username: { type: String, unique: true, required: true },
	hash: { type: String, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	createdDate: { type: Date, default: Date.now },
	alerts : Array
});

userSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', userSchema)
