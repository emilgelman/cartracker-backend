const userService = require('../services/UserService');

addUser = async req => {
	return userService.addUser(req);
};

getUser = async req => {
	return userService.getUser(req);
};

getUsers = async () => {
	return userService.getUsers();
};

module.exports = {
	getUser, getUsers, addUser
};
