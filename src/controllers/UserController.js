const boom = require('boom');
const utils = require ('../utils');


// Get Data Models
const User = require('../models/User');
const Alert = require('../models/Alert');

// Get all users
exports.getUsers = async () => {
	try {
		return await User.find()
	} catch (err) {
		throw boom.boomify(err)
	}
};

// Get single user by ID
exports.getSingleUser = async req => {
	try {
		const id = utils.getRequestID(req);
		return await User.findById(id)
	} catch (err) {
		throw boom.boomify(err)
	}
};

// Get single user's alerts
exports.getUserAlerts = async req => {
	try {
		const id = utils.getRequestID(req);
		return await Alert.find({ user_id: id });
	} catch (err) {
		throw boom.boomify(err)
	}
};
