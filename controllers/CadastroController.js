const Model = require('../models/CadastroModel');

module.exports = {
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
    }

}