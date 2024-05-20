const mongoose = require('mongoose'); // se importa la utilería mongoose

// Se define el esquema del usuario

const userSchema = mongoose.Schema({
    user:  {
        type: String,
        required: true 
    },
    
    password: {
        type: String,
        required: true
    },

    creationDate: {
        type: Date, 
        default: Date.now
    }
    
});

module.exports = mongoose.model('User', userSchema); //Exporta el mdelo para que pueda ser usado por otros modulos
