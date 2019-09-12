const router = require('express').Router();
const UserController = require('../controllers/controller');

router.post('/', UserController.store);

module.exports = router;
