const userService = require('../services/UserService');
const scrapeService = require('../services/ScrapeService');

function authenticate(req, res, next) {
	userService.authenticate(req.body)
		.then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
		.catch(err => next(err));
}

function register(req, res, next) {
	userService.create(req.body)
		.then(() => res.json({}))
		.catch(err => next(err));
}

function getAll(req, res, next) {
	userService.getAll()
		.then(users => res.json(users))
		.catch(err => next(err));
}

function getCurrent(req, res, next) {
	userService.getById(req.user.sub)
		.then(user => user ? res.json(user) : res.sendStatus(404))
		.catch(err => next(err));
}

function getById(req, res, next) {
	userService.getById(req.params.id)
		.then(user => user ? res.json(user) : res.sendStatus(404))
		.catch(err => next(err));
}

function update(req, res, next) {
	userService.update(req.params.id, req.body)
		.then(() => res.json({}))
		.catch(err => next(err));
}

function _delete(req, res, next) {
	userService.delete(req.params.id)
		.then(() => res.json({}))
		.catch(err => next(err));
}

function getAlerts(req, res, next) {
	userService.getAlerts(req.params.username)
		.then(alerts => alerts ? res.json(alerts) : res.sendStatus(404))
		.catch(err => next(err));
}

function getModels(req, res, next) {
	scrapeService.getModels()
		.then(models => models ? res.json(models) : res.sendStatus(404))
		.catch(err => next(err));
}

module.exports = {
	authenticate, register, getAll, getCurrent, getById, update, _delete, getAlerts, getModels
};
