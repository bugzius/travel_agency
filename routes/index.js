/**
 * Algo que debe de estar muy claro es que solo debemos de tener una instancia
 * de nuestra aplicación.
 * 
 * Por ello si ya se encuentra en otra ruta instanciada, no debemos de instanciarla
 * nuevamenta. Podemos instanciar por medio de express el método que necesitamos
 * y luego exportarlo para asignarselo a la primera instancia creada.
 */

import express from 'express';
import {
    paginaInicio,
    paginaDetalleViaje,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes
} from '../controllers/paginasControllers.js';

import { guardarTestimonial } from '../controllers/testimonialController.js'

const router = express.Router(); //Extendemos su uso y instanciamos router.

//Creando las rutas
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);
/**
 * # Comodín
 * Nos permite crear paths dinámicas, cualquier ruta a la que nos dirijamos
 * que contenga parte de la ruta inicial ejecutará el controller que le hayamos establecido
 * 
 * El valor que le coloquemos luego del comodín no es del todo relevante para nuestra
 * funcionalidad. pero lo que sí podemos alterar con esto, es que el valor que allí almacenemos
 * será el nombre de la propiedad de la cual valor a acceder a el path añadido. [res.params.slug]
 */

router.get('/testimoniales',paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

export default router;