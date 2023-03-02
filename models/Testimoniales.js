import Sequelize from 'sequelize';
import db from '../config/bd.js'

export const Testimonial = db.define('testimoniales',{
    nombre:{
        type: Sequelize.STRING
    },
    correo:{
        type: Sequelize.STRING
    },
    mensaje:{
        type: Sequelize.STRING
    }
})

// 1. Obtenemos la conexión a la base de Datos con Sequelize
// 2. Vamos a definir y a Obtener una tabla de la Base de Datos
// 3. desde nuestra base de Datos usamos el método .define(1arg,2arg)
// 4. Primer argumento es el nombre de la base de Datos que sequelize irá a buscar.
// 5. El segundo Argumento definiremos las columnas que contiene nuestra tabla en la base de Datos
// 6. Definimos los nombre de las columnas con su propiedad de Tipo de Dato.