const Model = require('../models/CadastroModel');

module.exports = {
    async store(req, res) {
        const { 
            _id,
            usuario,
            senha,
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
            _id,
            usuario,
            senha,
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

    async update() {
        exports.update = (req, res) => {
            if(!req.body._id) {
                return res.status(400).send({
                    message: "It can not be empty"
                });
            }
        
            // Find usuario and update it with the request body
            Model.findByIdAndUpdate(req.params.cadastroId, {
                usuario: req.body.usuario,
                senha:req.body.senha,
                nome:req.body.nome,
                sobrenome:req.body.sobrenome,
                sexo:req.body.sexo,
                cpf:req.body.cpf,
                nome_do_pai:req.body.nome_do_pai,
                nome_da_mãe:req.body.nome_da_mãe,
                nascimento:req.body.nascimento,
                naturalidade:req.body.naturalidade,
                uf:req.body.uf,
                cep:req.body.cep,
                logradouro:req.body.logradouro,
                numero:req.body.numero,
                complemento:req.body.complemento,
                bairro: req.body.bairro,
                municipio:req.body.municipio,
                uf_nascimento:req.body.uf_nascimento,
            }, {new: true})
            .then(usuario => {
                if(!usuario) {
                    return res.status(404).send({
                        message: "User not found with id " + req.params.cadastroId
                    });
                }
                res.send(usuario);
            }).catch(err => {
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "User not found with id " + req.params.cadastroId
                    });                
                }
                return res.status(500).send({
                    message: "Error updating user with id " + req.params.cadastroId
                });
            });
        };

    },

    async destroy() {
        
    }

}