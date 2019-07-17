const express = require('express');
const router = express.Router(); // Este es un módulo de express
               // al ejecutar este método nos devuelve un objeto de JavaScripty ahí podremos almacenar las rutas

                //req es la infromación del navegador al servidor y req es la respuesta del servidor al navegador, ambos son objetos JS
//router.get('/', (req, res) => { // cuando router indique la ruta principal (/) devolverá un "Hello world"
//    res.end('Hello World') //res.end indica que responderá a la función con los parámetros que tiene
//});

router.get('/',(req, res) => {
    res.render('index', {
        title: 'My WebStore' // A parte del index podemos agregar mad objetos en formato JSON y será recibido en el archivo ejs
    }) // Renderiza el archivo index.ejs el cual se convierte en un archivo HTML y que luego será lo que se muestre en el server
}); // A esto se le conoce como Vista

router.get('/products', (req, res, next) => {
    res.render('products', {
        title: 'List of Products'
    });
});






module.exports = router