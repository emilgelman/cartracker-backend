const boom = require('boom');
const Alert = require('../models/Alert');

const getAlerts = async () => {
    try {
        return await Alert.find();
    } catch (err) {
        throw boom.boomify(err)
    }
};

const addAlert = async (alertParam) => {
    try {
        const alert = new Alert(alertParam);
        return await alert.save();
    } catch (err) {
        throw boom.boomify(err)
    }
};

getAlert = async (id) => {
    try {
        return await Alert.findById(id)
    } catch (err) {
        throw boom.boomify(err)
    }
};

updateAlert = async (id, alertParam) => {
    try {
        return await Alert.findByIdAndUpdate(id, alertParam, {new: true})
    } catch (err) {
        throw boom.boomify(err)
    }
};

module.exports = {
    getAlert, getAlerts, addAlert, updateAlert
};
