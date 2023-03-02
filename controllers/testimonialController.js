import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req,res) => {
    const {nombre,correo,mensaje} = req.body;//Valores que vienen de la Respuesta

    //Valida los valores del formulario
    const validate = [nombre,correo,mensaje].every(value => value.trim().length > 0);

    //Consulta los testimoniales existentes
    const testimoniales = await  Testimonial.findAll();
    
    if(!validate) {
        //Mostrar el Error en la vista
        res.render('testimoniales', {
            pagina:'Testimoniales',
            error:'Completa todos los Campos',
            nombre, correo, mensaje, testimoniales
        });
        return;
    };

    //Almacenar en la base de datos
    try {
        const val = await Testimonial.create({nombre,correo,mensaje});
        res.redirect('/testimoniales')

    } catch (error) {
        console.log(error);
    }
};

export {
    guardarTestimonial
    //Obteniendo el router POST y ejecutando el Controller para validar
}