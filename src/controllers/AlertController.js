const alertService = require('../services/AlertService');

addAlert = async req => {
	return alertService.addAlert(req);
};

getAlert = async req => {
	return alertService.getAlert(req);
};

getAlerts = async (req) => {
	return alertService.getAlerts(req);
};

module.exports = {
	getAlert, getAlerts, addAlert
};
