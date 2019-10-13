const boom = require('boom');
const utils = require ('../utils');
const Alert = require('../models/Alert');

getAlerts = async (req) => {
    try {
        return await Alert.find(req)
    } catch (err) {
        throw boom.boomify(err)
    }
};

addAlert = async (req) => {
    try {
        let body = utils.getRequestBody(req);
        const alert = new Alert(body);
        return await alert.save();
    } catch (err) {
        throw boom.boomify(err)
    }
};

getAlert = async req => {
    try {
        const id = utils.getRequestID(req);
        return await Alert.findById(id)
    } catch (err) {
        throw boom.boomify(err)
    }
};

updateAlert = async req => {
    try {
        const id = utils.getRequestID(req);
        const updateData = utils.getRequestParams(req);
        return await Alert.findByIdAndUpdate(id, updateData, {new: true})
    } catch (err) {
        throw boom.boomify(err)
    }
};

// // Get single user's alerts
// getUserAlerts = async req => {
//     try {
//         const id = utils.getRequestID(req);
//         return await Alert.find({ user_id: id });
//     } catch (err) {
//         throw boom.boomify(err)
//     }
// };

// // Get single user's alerts
// getUserAlerts = async req => {
//     try {
//         const id = utils.getRequestID(req);
//         return await Alert.find({ user_id: id });
//     } catch (err) {
//         throw boom.boomify(err)
//     }
// };

module.exports = {
    getAlert, getAlerts, addAlert, updateAlert
};
