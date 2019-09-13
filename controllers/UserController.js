const bcrypt = require('bcrypt');
const modelUser = require('../models/LoginModel');

let userController = {};

userController.allUsers = (req, res) => {

  modelUser.find()
    .then(results => res.json(results))
    .catch(err => res.send(err));
}

userController.newUser = (req, res) => {

  if(req.body.usuario && req.body.senha) {
    if(req.body.senha2 && req.body.senha == req.body.senha2) {

      modelUser.findOne({ 'usuario': req.body.usuario })
        .then(usuario => {

          if(usuario) {
            res.json({ success: false, message: 'Esse nome de usuário não está disponível' });
          
          } else {

            bcrypt.hash(req.body.senha, 10)
              .then(hash => {

                let encryptedsenha = hash;
                
                let newUser = new modelUser({
                  usuario: req.body.usuario,
                  senha: encryptedsenha
                });

                newUser.save()
                  .then(() => res.json({ success: true, message: 'Usuário criado com sucesso', statusCode: 201 }))
                  .catch(err => res.json({ success: false, message: err, statusCode: 500 }));
              })

              .catch(err => res.json({ success: false, message: err, statusCode: 500 }));
          }
        })
    
    } else {

      res.json({ success: false, message: 'Senhas não batem', statusCode: 400 });
    }

  } else {

    res.json({ success: false, message: 'Campos do nome de usuário e da senha são necessários', statusCode: 400 });
  }
}

module.exports = userController;