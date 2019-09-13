const Model = require('../models/LoginModel');

module.exports = {
    async store(req, res){
        const profile = await Model.create({ 
            usuario: req.body.usuario,
            senha: req.body.senha
        })
        return res.json(profile);
  
    }
};
