const Model = require('../models/model');

module.exports = {
    async store(req, res){
        const profile = await Model.create({ 
            usuario: req.body.usuario,
            senha: req.body.senha
        })
        return res.json(profile);
  
    }
};