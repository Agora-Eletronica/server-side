const router = require('express').Router();
const UserController = require('../controllers/SignupController');

router.get('/signup/:id', UserController.index);
router.post('/signup', UserController.store);
router.put('/signup/update/:id', UserController.update);
router.delete('/signup/delete/:id', UserController.destroy);

module.exports = router;
