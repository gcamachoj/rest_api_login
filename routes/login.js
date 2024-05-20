const express = require('express');
const router = express.Router();
const Login = require('../models/Login');
const User = require('../models/User');

router.post('/', async (req, res) =>{

    try {
        // Obtener el nombre del usuario y la contraseña del cuerpo de la solicitud
        const { user, password } = req.body;


        // Busca el usuario en la colección de usuarios:
        const existingUser = await User.findOne({ user: user, password: password });

        // Si el usuario no existe, devolver un error
        if(!existingUser){
            return res.status(404).json({ msessage: 'Usuario no encontrado o contraseña incorrecta'});
        }

        // Crea un nuevo registro de login
        const login = new Login({ user: user});
        
        // Guardar el registro de login en la bd
        await login.save();

        // Devolver una respuesta exitosa
        res.status(201).json({ message: 'Login registrado exitosamente' });

    
        } catch (error) {
            // Manejo de errores
            res.status(500).json({ message: 'Error al registrar el login', error: error.message });
        }

});

module.exports = router;