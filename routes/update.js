const router = require('express').Router();
const UpdateController = require('../controllers/CadastroController');

router.get('/', UpdateController.update)

module.exports = router;