// Import our Controllers
const carController = require('../controllers/CarController');
const alertController = require('../controllers/AlertController');
const scrapeController = require('../controllers/ScrapeController');
const userController = require('../controllers/UserController');

const routes = [
  {
    method: 'GET',
    url: '/api/cars',
    handler: carController.getCars
  },
  {
    method: 'GET',
    url: '/api/cars/:id',
    handler: carController.getSingleCar
  },
  {
    method: 'POST',
    url: '/api/cars',
    handler: carController.addCar,
  },
  {
    method: 'PUT',
    url: '/api/cars/:id',
    handler: carController.updateCar
  },
  {
    method: 'DELETE',
    url: '/api/cars/:id',
    handler: carController.deleteCar
  },
  {
    method: 'POST',
    url: '/api/alerts',
    handler: alertController.addAlert
  },
  {
    method: 'GET',
    url: '/api/alerts/:id',
    handler: alertController.getCarsForAlert
  },
  {
    method: 'GET',
    url: '/api/scrape',
    handler: scrapeController.scrape
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
