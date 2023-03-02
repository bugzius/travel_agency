//Obtenemos express del paquete de nodemodules
import express from 'express';
import router from './routes/index.js';
import db from './config/bd.js';

//Configurar variable de Entorno
//dotenv.config();
/**
 * Permite que los valores en los archivos .env sean accesibles por medio
 * de un Objeto llamado process
 */


//Guarda la inicialización de express, Es un objeto con métodos
const app = express();
/**
 * Establecer un puerto,
 * Cuando subimos nuestra app a producción sobre un hosting, este nos permitirá
 * acceder a variables de Entorno actuales.
 * 
 * Puede ser que en donde se despliegue, este tenga un puerto diferente disponible.
*/

//Conectar la base de Datos
db.authenticate()
    .then(() => {
        console.log('Base de datos conectada');
    })
    .catch(console.log);

//Puerto de nuestro Servicio de Servidor
const port = process.env.PORT || 4000;

//Obtener el año actual
app.use((req,res,next) => {
    res.locals.localeDate = new Date().getFullYear();
    res.locals.siteName = 'Agencia de Viajes';
    //Continúa al siguiente middleware
    next();
});

/**
 * Agregar body parser para leer los datos del Formulario
 */
app.use(express.urlencoded({extended: true}));

/**
 * El objeto de ["res"] nos permite acceder a la propiedad locals, la cual
 * nos permite crear variables locales en la respuesta hacia nuestra
 * vista.
 * 
 * Este objeto se encuentra vacío en su primera instancia, pero podemos irlo
 * llenando con nuestrar variables locales.
 * 
 * El método use acepta todos y cada uno de los 4 métodos HTTP, esto nos permite
 * que sea consistente en todos los escenarios. También nos permite hacerlo accesible
 * en todas las vistas.
 * 
 * Ahora asignaremos nuestra variable
 */


// Agregamos route
/**
 * Este método nos permite enviar una instancia de router
 * sobre una ruta principal.
 * **
 * Use nos permite inferir cada uno de los métodos que maneja el App.
 * 
 * El método use también nos permite crear nuestro propio middleware.
 * 
 * Algo a tener en cuenta, es que los middlwares se ejecutan en pila; debemos
 * especificarle a la pila que al finalizar de ejecutar nuestro callback debemos
 * de continuar a ejecutar el siguiente middleware.
 * 
 * Por medio de este callback en el método USE podemos acceder, aparte de la respuesta,
 * tambien podemos acceder a el valor ["next"], y al ejecutar este método, le decimos
 * a nuestro middleware que ya ha acabado y puede continuar con el siguiente.
 * **
 * 1er Argumento; será el prefijo para las rutas definidas en el segundo argumento.
 */
app.use('/', router);

/**
 * Express; nos permite hacer uso de métodos HTTP, como por ejemplo en este caso,
 * el [app.get(`${url}`)].
 * 
 * Este método registra una url y permite acceder a un request y a un response.
 * Primera argumento: La url, segundo argumento: callback(req,res).
 * Request: Es la solicitud que realiza la URL.
 * Response: Es un Objeto con métodos los cuales voy a usar para responder sobre la req
 * de dicha url.
 */

// //Creando las rutas
// app.get('/', (req,res) => {
    
//     res.send('Hola mundo'); //Imprime en pantalla información estática
//     // res.json({ // Envía un valor tipo JSON
//     //     id:1
//     // })
    
//     //res.render();// Renderiza una vista.
// });

// app.get('/nosotros', (req,res) => {
//     res.send('Nosotros');
// });

// app.get('/contacto', (req,res) => {
//     res.send('Contacto');
// });

app.listen(port, () => {
    console.log(`La app está corriendo en el puerto ${port}`);
});

//nodemon
/**
 * Permite reiniciar nuestra app o reiniciar le ejecución de un documento cada
 * vez que lo guardemos.
 * nodemon [file.ext]
 */

//CommonJS o ESModules
/**
 * A diferencia de javascript en el navegador, en node se mantiene el soporte a commonJS
 * por defecto.
 * 
 * Para usar ESModules, debemos establecer nuestro proyecto para que uso módulos, agregando
 * en el package.json lo siguiente, ["type":"module"];
 * 
 * De esta manera permitirá el uso de módulos.
 */

//Instalando PUG
app.set('view engine', 'pug');
/**
 * Se usa par asignar el nombre de una configuración al valor, pero existen
 * nombres preestablecidos para configurar el comportamiento del servidor.
 */

/**
 * Un middelware son las herramientas que nos permiten la comunicación
 * entre servicios distribuídos.
 */
//Definir la carpeta pública
app.use(express.static('public'))
//Nos permite acceder como raíz a las rutas que ahora serán estáticas