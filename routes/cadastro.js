const router = require('express').Router();
const CadastroController = require('../controllers/CadastroController')

router.post('/', CadastroController.store);

module.exports = router;