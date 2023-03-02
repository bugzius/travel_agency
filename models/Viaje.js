import Sequelize from "sequelize";
import db from '../config/bd.js';

//Importamos la Conexión a la base de Datos e Definimos la tabla y columna en la Base de Datos
export const Viaje = db.define('viajes',{
    //Idenficación de Columnas en la Tabla de Base de Datos Definida
    titulo:{
        type: Sequelize.STRING,
    },
    precio:{
        type: Sequelize.STRING
    },
    fecha_ida:{
        type: Sequelize.DATE,
    },
    fecha_vuelta:{
        type: Sequelize.DATE,
    },
    imagen:{
        type: Sequelize.STRING
    },
    descripcion:{
        type: Sequelize.STRING
    },
    disponibles:{
        type: Sequelize.STRING
    },
    slug:{
        type: Sequelize.STRING
    },
});