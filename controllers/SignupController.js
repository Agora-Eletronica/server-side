const Model = require('../models/LoginModel');

module.exports = {
    async index(req, res) {

        usuario = req.params.usuario;

        const usuarioLogado = await Model.findOne({usuario});

        return res.json(usuarioLogado);

    },

    async store(req, res){
        const {
            usuario,
            senha
        } = req.body;

        const usuarioLogado = await Model.findOne({usuario});

        if(usuarioLogado) return res.json({message: "Usuário já em uso"});
       
        const profile = await Model.create({ 
            usuario,
            senha
        });

        
        
        return res.json(profile);
    },

    async update(req, res) {
        const usuarioExiste = await Model.findOne({usuario: req.body.usuario});

        if(!usuarioExiste) return res.json({ message: "Usuário não existe" });
        

        const senha1 = await Model.findByIdAndUpdate(req.params.id, req.body.senha, { new: true });

        return res.json(senha1);
    },

    async destroy(req, res) {
        await Model.findByIdAndRemove(req.params.id);

        return res.json({ message: "Usuário excluido com sucesso" });
    }
};
