const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) =>{
    // console.log(req.body); se utiliza para la respuesta del post en consola

    const usuario = new User({
        user: req.body.user,
        password: req.body.password,
        creation_date: req.body.creation_date
    });

    try {
        const saveUser = await usuario.save(); // método para guardar en la bd.
        res.json({
            message: 'Usuario creado',
            user: saveUser
        });
    } catch (error) {
        res.json({
            message: 'Error al crear usuario',
            error: error
        });
    }
});
    module.exports = router; // devuelve como módulo lo que se le asigna a route.


