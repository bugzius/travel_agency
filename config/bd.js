import Sequelize from 'sequelize'
import dotenv from 'dotenv/config';

const {DB_HOST,DB_USER,DB_PASS,DB_NAME} = process.env

const db = new Sequelize( DB_NAME, DB_USER,DB_PASS, {
    host: DB_HOST, //host name de nuestro servicio de base de datos
    port: '3306',// Puerto en el que se encuentra corriendo el servicio
    dialect:'mysql', //Tipo de base de datos
    define:{
        timestamps: false
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000,
    },
    operatorAliases: false
});

export default db;