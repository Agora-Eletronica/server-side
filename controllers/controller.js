const Model = require('../models/model');

module.exports = async function(){
        const profile = await Model.create({ 
            usuario,
            senha
        })
        return res.json(profile);
  
};