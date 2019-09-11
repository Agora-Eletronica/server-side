const { Schema, model } = require('mongoose');

const ApiSchema = new Schema({
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
    cpf: {
        type: Number,
        required: true,
    },
    senha: {
        type: String,
        required: true,
        select: false
    }
})