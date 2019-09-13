const { Schema, model } = require('mongoose');

const LoginSchema = new Schema({
    id: Schema.Types.ObjectId,  
    usuario: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true,
        select: false
    }
    
});

module.exports = model('Login', LoginSchema);