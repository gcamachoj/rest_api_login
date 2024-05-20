const express = require('express'); // Importamos el paquete express
const app = express();
const mongoose = require('mongoose'); // importamos el paquete mongoose para conectar con la bd
const bodyParser = require('body-parser'); // importamos body-parser para 


// Configurar body-parser para manejar solicitudes JSON y URL-encoded
app.use(bodyParser.json());  // Analiza cuerpos JSON


// Importa la rutas de usuarios
const  usersRoute = require('./routes/user');
app.use('/usuarios', usersRoute);

// Importa las rutas de login
const loginRoute = require('./routes/login');
app.use('/login', loginRoute);

/*  Se crean las rutas */
app.get('/', (req, res) => {
    res.send('prueba 1 respuesta del servidor') // ruta default
} );


//conexion a la bd
async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.ywdzkcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Si hay conexión a la BD');
    } catch (error) {
        console.error('Error conectando a la BD', error);
        process.exit(1); // Termina el proceso si no se puede conectar
    }
}

connectDB();
// Se configura como va escuchar el servidor las peticiones

app.listen(10000);
console.log('El servidor está corriendo en el puerto 10000');
