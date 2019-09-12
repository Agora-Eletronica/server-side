const router = require('express').Router();
const userController = require('../controllers/UserController');


router.get('/', userController.allUsers);
router.post('/', userController.newUser);

module.exports = router;