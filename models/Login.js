const mongoose = require('mongoose'); // Importación librería mongoose

// Detalles de generación del modelo:

const LoginSchema = mongoose.Schema({

    startDate : {
        type: Date,
        default: Date.now    
    },

    user : {
        type: String,
        require: true
    }

    })

module.exports = mongoose.model('Login', LoginSchema)  // Exporta el modelo para que pueda ser usado en otros modulos del aplicativo

