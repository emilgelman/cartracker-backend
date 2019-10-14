const alertController = require('../controllers/AlertController');
const userController = require('../controllers/UserController');
const router = require('express').Router();



// alerts
router.post('/api/alerts', alertController.addAlert);
router.get('/api/alerts/:id', alertController.getAlert);
router.get('/api/alerts', alertController.getAlerts);
router.delete('/api/alerts/:id', alertController.deleteAlert);

// user
router.post('/api/users/authenticate', userController.authenticate);
router.post('/api/users/register', userController.register);
router.get('/api/users/', userController.getAll);
router.get('/api/users/current', userController.getCurrent);
router.get('/api/users/:id', userController.getById);
router.put('/api/users/:id', userController.update);
router.delete('/api/users/:id', userController._delete);
router.get('/api/users/:username/alerts', userController.getAlerts);


module.exports = router;

