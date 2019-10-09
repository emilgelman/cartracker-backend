const boom = require('boom');
const utils = require ('../utils');
const Car = require('../models/Car');

// Get all cars
exports.getCars = async () => {
	try {
		return await Car.find()
	} catch (err) {
		throw boom.boomify(err)
	}
};

// Get single car by ID
exports.getSingleCar = async req => {
	try {
		const id = utils.getRequestID(req);
		return await Car.findById(id)
	} catch (err) {
		throw boom.boomify(err)
	}
};

// Add a new car
exports.addCar = async req => {
	try {
		let body = utils.getRequestBody(req);
		const car = new Car(body);
		return await car.save();
	} catch (err) {
		throw boom.boomify(err)
	}
};



// Update an existing car
exports.updateCar = async req => {
	try {
		const id = utils.getRequestID(req);
		const updateData = utils.getRequestParams(req);
		return await Car.findByIdAndUpdate(id, updateData, {new: true})
	} catch (err) {
		throw boom.boomify(err)
	}
};


// Delete a car
exports.deleteCar = async req => {
	try {
		const id = getRequestID(req);
		return await Car.findByIdAndRemove(id);
	} catch (err) {
		throw boom.boomify(err)
	}
};
