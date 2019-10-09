const boom = require('boom');
const utils = require ('../utils');
// Get Data Models
const Alert = require('../models/Alert');
const Car = require('../models/Car');
const mongoose = require('mongoose');

// Get single alert
exports.getSingleAlert = async req => {
	try {
		const id = utils.getRequestID(req);
		return await Alert.findById(id);
	} catch (err) {
		throw boom.boomify(err);
	}
};

exports.addAlert = async req => {
	try {
		let body = utils.getRequestBody(req);
		const alert = new Alert(body);
		return await alert.save();
	} catch (err) {
		throw boom.boomify(err)
	}
};

// Get all cars for single alert
exports.getCarsForAlert = async req => {
	try {
		const id = utils.getRequestID(req);
		const alert = await Alert.findById(id);
		return await Car.find({ 'id': {$in: alert.cars} });
	} catch (err) {
		throw boom.boomify(err)
	}
};
