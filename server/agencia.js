const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');


/**configurar express */
const app = express();

/**Habilitar pug */
app.set('view engine', 'pug');

/**añadir vistas */
app.set('views', path.join(__dirname, './views'));

//**cargar una carpeta estatica llamada public */
app.use(express.static('public'));

//**Validar si estamos en desarollo o en produccion */
const config = configs[app.get('env')];
//**Creamos la variable para el sitio web */
app.locals.titulo = config.nombresitio;

//**Muestra el año actual */
app.use((req, res, next) => {
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    
    console.log(res.locals);
    return next();
});
//**ejecutar el body parser */

app.use(bodyParser.urlencoded({extends:true}));
/**cargar rutas */
app.use('/', routes());

app.listen(3000);