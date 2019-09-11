const router = require('express').Router();
const UserController = require('../controllers/controller');

router.post('/signup', UserController);

module.exports = router;