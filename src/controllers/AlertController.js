const alertService = require('../services/AlertService');

addAlert = async (req, res, next)=> {
	alertService.addAlert(req.body)
        .then(() => res.json({"msg" : "Alert was added successfully"}))
        .catch(err => next(err));
};

getAlert = async (req, res, next) => {
    alertService.getAlert(req.params.id)
        .then(alert => alert ? res.json(alert) : res.sendStatus(404))
        .catch(err => next(err));
};

getAlerts = async (req, res, next) => {
    alertService.getAlerts()
        .then(alerts => res.json(alerts))
        .catch(err => next(err));
};

deleteAlert = async (req, res, next) => {
    alertService.deleteAlert(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
};

module.exports = {
	getAlert, getAlerts, addAlert, deleteAlert
};
