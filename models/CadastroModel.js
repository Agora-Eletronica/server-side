const { Schema, model } = require('mongoose');

const CadastroSchema = new Schema({
    id: Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true,
        minlength: 3
    },
    sobrenome: {
        type: String,
        required: true,
        minlength: 4
    },
    sexo: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        minlength: 9,
        select: false
    },
    nome_do_pai: {
        type: String,
        required: false
    },
    nome_da_mãe: {
        type: String,
        required: true,
        minlength: 15
    },
    nascimento: {
        type: Number,
        required: true,
    },
    naturalidade: {
        type: String,
        required: false,
    },
    uf: {
        type: String,
        required: false
    },
    cep: {
        type: Number,
        required: true
    },
    logradouro: {
        type: String,
    },
    número: {
        type: Number,
    },
    complemento: {
        type: String,
    },
    bairro: {
        type: String,
    },
    municipio: {
        type: String,
    },
    uf_nascimento: {
        type: String,
    }
});

module.exports = model('Cadastro', CadastroSchema);

