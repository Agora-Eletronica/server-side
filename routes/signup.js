const router = require('express').Router();
const UserController = require('../controllers/SignupController');

router.post('/signup', UserController.store);

module.exports = router;
