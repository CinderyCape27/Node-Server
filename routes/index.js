const express = require('express');
const router = express.Router(); // Este es un módulo de express
               // al ejecutar este método nos devuelve un objeto de JavaScripty ahí podremos almacenar las rutas

                //req es la infromación del navegador al servidor y req es la respuesta del servidor al navegador, ambos son objetos JS
//router.get('/', (req, res) => { // cuando router indique la ruta principal (/) devolverá un "Hello world"
//    res.end('Hello World') //res.end indica que responderá a la función con los parámetros que tiene
//});
const indexController = require('../controlers/indexc');
router.get('/', indexController.index); // A esto se le conoce como Vista

router.get('/products', indexController.ListOfproducts);

router.post('/new-product', indexController.newProduct);




module.exports = router