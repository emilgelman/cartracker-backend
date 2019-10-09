// Import our Controllers
const carController = require('../controllers/CarController');
const alertController = require('../controllers/AlertController');


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
  }
];

module.exports = routes;
