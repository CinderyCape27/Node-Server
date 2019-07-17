const express = require('express'); // Aquí mandamos a llamar Express
const app = express(); // Aqui ejecutamos express con la constante app y lo unico que hace es recibir un objeto
const path = require('path');
const routes = require('./routes/index.js'); //Mandamos a requerir el archivo index.js
const bosyParser = require('body-parser'); // este es un middleware



// Settings
app.set('port', process.env.PORT || 3000); // Le estamos indicando que vamos a configurar un puerto
    // .set('port) es como asignar una varible y process.env.PORT le preguntamos si hay algpun puerto por defecto en el sistema, sino que use el 3000
app.set('views', path.join(__dirname, 'views'));
                 // path.join() une directorios, en este caso __dirname y views
app.set('view engine', 'ejs'); // Esta línea indica el motor de plantillas que vamos a utilizar
        //vie engine es una configuración a la cual se le pasa ejs


// Middlewares
app.use((req, res, next) => {   // los middlewares sólo se pueden llamar usando .use
console.log(`${req.url} -${req.method}`); // El console.log esta solicitando como se está haciendo el procesamiento de la información
next(); // Next indica que el código debe seguir.
});
app.use(bosyParser.json()); // Este módulo hace que se entienda la informacion que nos da el navegador, por lo general JSON
app.use(bosyParser.urlencoded({extended: false})); // También el navegador nos puede enviar información en formato html
                    //urleconded adaptará el formato 


// Routes
app.use(routes); // con esto nuestra app.js ya puede leer las rutas que estarán en el otro archivo


// Static Files
app.use(express.static(path.join(__dirname, 'public'))); //Este es un modulo de express y dentro 
        // se le indica en dónde están los archivos estaticos, en este caso están en public por ello se usa paht.join







// Start the server
app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'))
});
// En esta parte le indicamos a app(express) que escuche  a "listen", el cual indica que el puerto sera el 3000
// luego indicamos que será ejecutada con una función que contiene a un console.log
// Probarlo a partir de aquí. ***
