const boom = require('boom');
const utils = require ('../utils');
const User = require('../models/User');

// Get all users
getUsers = async () => {
    try {
        return await User.find()
    } catch (err) {
        throw boom.boomify(err)
    }
};

addUser = async (req) => {
    try {
        let body = utils.getRequestBody(req);
        const user = new User(body);
        return await user.save();
    } catch (err) {
        throw boom.boomify(err)
    }
};

// Get single user by ID
getUser = async req => {
    try {
        const id = utils.getRequestID(req);
        return await User.findById(id)
    } catch (err) {
        throw boom.boomify(err)
    }
};


module.exports = {
   getUser, getUsers, addUser
};
