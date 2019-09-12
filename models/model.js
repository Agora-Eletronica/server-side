const { Schema, model } = require('mongoose');

const ApiSchema = new Schema({
/*    id: Schema.Types.ObjectId,
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
        type: Boolean,
        required: true
    },
    cpf: {
        type: Number,
        required: true,
    },  */
    usuario: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true,
        select: false
    } /*
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
        type: Date,
        required: true,
    },
    naturalidade: {
        type: String,
        required: false,
    },
    UF: {
        type: String,
        required: false
    },
    CEP: {
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
    UF_nascimento: {
        type: String,
    }  */
});

module.exports = model('Cadastro', ApiSchema);