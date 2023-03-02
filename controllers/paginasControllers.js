//Conectamos al modelo
import {Viaje} from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

//Controlador de la Página de Inicio
const paginaInicio = async (req,res) => {
    //res.send('Hola mundo'); //Imprime en pantalla información estática
    try {
        //Trae unicamente 3 valores
        // const viajes = await Viaje.findAll({limit: 3});

        const [viajes, testimoniales] = await Promise.all([
            Viaje.findAll({limit:3}),
            Testimonial.findAll({limit:3})
        ]);

        const values = {
            pagina:'Inicio',
            clase: 'home',
            viajes, testimoniales
        }

        res.render('inicio',values)

    } catch (err) {
        console.log(err);
    };
};

//Controlador de la página de Nosotros
const paginaNosotros = (req,res) => {
    //res.send('Nosotros');
    const values = {
        pagina:'Nosotros'
    }
    res.render('nosotros',values);
    /**
     * Este método responde con una vista HTML.
     * Lo buscará en un directorio raíz con el nombre de "views", y
     * buscará el nombre del documento.
     * 
     * Este método nos permite enviar variables o valores como objeto por medio del render
     * a nuestro documento seleccionado.
     */
}

//Controlador de la página de Viajes
const paginaViajes = async (req,res) => {
    //Consultar Base de Datos
    const viajes = await Viaje.findAll();

    const values = {
        pagina:'Proximos viajes',
        viajes
    }
    res.render('viajes',values);
};

//Controlador de la página de testimoniales
const paginaTestimoniales = async (req,res) => {
    try {
        //Consultar modelo de Testimoniales
        const testimoniales = await Testimonial.findAll();
        
        //Valores a enviar hacia la Vista
        const values = {
            pagina:'Testimoniales',
            testimoniales
        };

        res.render('testimoniales',values);
    } catch (error) {
        console.log(error);
    }
};

// Muestra un viaje por su ruta
const paginaDetalleViaje = async (req,res) => {
    const { slug } = req.params

    //Si la base de datos no encuentra el valor, Renderiza una vista de Error
    try {
        const viaje = await Viaje.findOne({where:{slug}});
        
        if(!viaje){
            throw new Error('No es posible acceder a ese elemento');
        };

        res.render('viaje', {
            pagina:'Viaje',
            viaje
        })

    } catch (error) {
        res.render('undefined',{error});
    }
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}