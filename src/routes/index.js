const alertController = require('../controllers/AlertController');
const userController = require('../controllers/UserController');

const routes = [
  {
    method: 'PUT',
    url: '/api/alerts',
    handler: alertController.addAlert
  },
  {
    method: 'GET',
    url: '/api/alerts/:id',
    handler: alertController.getAlert
  },
  {
    method: 'GET',
    url: '/api/alerts',
    handler: alertController.getAlerts
  },
  {
    method: 'GET',
    url: '/api/users',
    handler: userController.getUsers
  },
  {
    method: 'GET',
    url: '/api/users/:id',
    handler: userController.getUser
  },
  {
    method: 'PUT',
    url: '/api/users',
    handler: userController.addUser
  }
];

module.exports = routes;
