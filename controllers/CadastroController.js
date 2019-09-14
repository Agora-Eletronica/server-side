const Model = require('../models/CadastroModel');

module.exports = {

    async index(req, res) {

        id = req.params.id;

        const usuarioLogado = await Model.findOne({id});

        return res.json(usuarioLogado);

    },

    async store(req, res) {
        const { 
            nome,
            sobrenome,
            sexo,
            cpf,
            nome_do_pai,
            nome_da_mãe,
            nascimento,
            naturalidade,
            uf,
            cep,
            logradouro,
            numero,
            complemento,
            bairro, 
            municipio,
            uf_nascimento } = req.body;

        const usuarioLogado = await Model.findOne({nome});

        if(usuarioLogado) return res.json({message: "Usuário já cadastrado"});

        const cadastro = await Model.create({
            nome,
            sobrenome,
            sexo,
            cpf,
            nome_do_pai,
            nome_da_mãe,
            nascimento,
            naturalidade,
            uf,
            cep,
            logradouro,
            numero,
            complemento,
            bairro, 
            municipio,
            uf_nascimento
        });

        return res.json(cadastro);
    },

    async update(req, res) {

        const usuarioExiste = await Model.findOne(req.body.usuario);

        if(!usuarioExiste) return res.json({ message: "Usuário não existe" });

        const usuario = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(usuario);
    },

    async destroy(req, res) {
        await Model.findByIdAndRemove(req.params.id);

        return res.json({ message: "Usuário excluido com sucesso" });
    }

}