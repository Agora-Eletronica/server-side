const router = require('express').Router();
const UserController = require('../controllers/SignupController');

router.post('/', UserController.store);

module.exports = router;
