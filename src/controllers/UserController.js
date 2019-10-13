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

// // Get single user's alerts
// exports.getUserAlerts = async req => {
// 	try {
// 		const id = utils.getRequestID(req);
// 		return await Alert.find({ user_id: id });
// 	} catch (err) {
// 		throw boom.boomify(err)
// 	}
// };
