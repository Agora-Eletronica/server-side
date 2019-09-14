const router = require('express').Router();
const CadastroController = require('../controllers/CadastroController')


router.get('/cadastro/:id', CadastroController.index);
router.post('/cadastro', CadastroController.store);
router.put('/update/:id', CadastroController.update)
router.delete('/cadastro/delete/:id', CadastroController.destroy);

module.exports = router;