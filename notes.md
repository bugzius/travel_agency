# Iniciar nuestra app

# Iniciar nuestro proyecto con Package.json

Se realiza ejecutando el comando [npm init -y] en la carpeta de nuestro proyecto.

# Instalar Dependencias

Las dependencias que instalaremos pueden ser de dos tipos; Los cuales son:
1. Dependencia de Desarrollo: Las que usamos como herramienta y no interiorizan con nuestro proyecto, Ej: nodemon, cypress, jest, babel, json-server, etc.
2. Dependencias de Producción: son lo contrario que las de Desarrollo, ya que nuestro código dependen de ellas.

Estas se verán reflejadas en el package.json.

Si queremos instalar una dependencia y especificar de qué tipo es, haremos lo siguiente; Si la dependencia es de producción la instalamos normal [npm i "name"], si queremos especificar que es de desarrollo usamos [npm install --save-dev "name"].

En este caso para el proyecto que vamos a crear, iniciaremos instalando, tanto una de producción como lo es _Express_, como una de desarrollo _nodemon_. Entonces escribiríamos lo siguiente.

```cli
npm i express // Dependencia de producción.
npm i --save-dev // Dependencia de Desarrollo
```

Al instalarlos nuestro package.json debería de tener algo así...

```json
{
    "dependencies": {
        "express": "^4.18.2"
    },
    "devDependencies": {
        "nodemon": "^2.0.20"
    }
}
```

# Template Engine o Motores de Plantilla.
Son la V (Vista) del MVC
Permiten mostrar la parte visual en nuestra aplicación. Toma una serie de datos y nos permite integrar el modelo vista con los resultados / datos  para mostrarlos en pantalla.

Se trata de un Software que nos permite hacer uso de plantillas para generar documentos que posteriormente serán renderizados.

Si queremos enviar una respuesta mucho más completa que renderice una vista podemos hacer uso de este modelo.

## Características de un Template Engine
1. Todos los template engines son diferentes.
2. Es muy fácil escribir codigo javascript y HTML

## Algunos más comunies con Node
1. Pug
2. EJS (Handlebars)
3. HBS (MustacheJS)
4. React 

La instalación de cada uno de estos se realiza por medio de NPM, en este caso usaremos PUG

```cli
Para instalar pub 
npm i pug
```
```javascript
//Para habilitarlo
app.set('view engine','pug')
```

# Public Directory
Va a tomar imágenes o hojas de estilo

# Conectar una Base de Datos

## ORM, Sequelize
### ¿Qué es un ORM (Object Relation Maper)?
Es una pieza de software que nos permite interactuar con nuestra Base de Datos sin necesidad de conocer SQL.
Con el manejo de programación Orientada a Objetos los ORM nos proveen de un sistema de Interacción que al procesarlo sea entendible para nuestro gestor de Bases de Datos.

**Ventajas**
- Flexibilidad, reducción de Tiempos de desarrollo.
- Nos permite manejar una base de datos con lenguaje sencillo de entender.
- Migración de Bases de Datos más sencillo; El ORM actuará como un componente global para la administración de nuestra base de datos en nuestra app, Por ello podemos migrar de base de datos unicamente modificando dicho componente en sus configuraciones para la nueva base de Datos; ya sea en el mismo SGDB o en uan diferente.
- Permite realizar migraciones, transacciones, trigers, trabajar con vistas. Dependiendo el ORM.

**Desventajas**
- El ORM puede no servir para realizar consultas grandes de manera eficiente.
- Depender completamente de un ORM en cuestión de conocimiento nos impide escalar la interacción con nuestra bases de Datos.

## Sequelize

Es un ORM para TypeScript y NodeJS que permite el manejo de Bases de Datos como Oracle, Postgres, MySQL, MariaDB, SQLite, SQLServer.

Este ORM Será el que usaremos para integrar nuestra Base de Datos con NodeJS.

### Métodos de Consulta
1. model.findAll(); //Permite asignar valores de condición

## MVC
Model View Controller, es un patrón de diseño de software que permite la separación de Obligaciones por piezas en nuestra aplicación web.

- Modelo: es el encargado de la base de datos y de la lógica para mostrar esos datos. 
- View (Vista): es el encargado de mostrar esos datos previamente obtenidos o recibidos.
- Controller: Es el encargado de conectar el modelo y la vista, tomando las solicitudes de cada uno.
- Router: es el encargado de registrar todos los EndPoints o URL's.

*__El diagrama más sencillo de cómo interactúan estos 4 elementos es de la siguiente manera:__*

El Router registra un controlador para el endPoint que se solicitará. El controlador le enviará la solicitud de datos correspondiente a el modelo (Maneja el componente de Base de Datos y su lógica) y posteriormente se lo entregará nuevamente al controlador para ser pasados a la vista y renderizar los documentos formateados con esos datos.

## Cómo crear Modelos
Para crear dichos modelos que se encargarán de la consulta a la base de datos, la cual nos retornará los valores que necesitamos, vamos a definir los modelos.

En el directorio raíz de nuestro proyecto vamos a crear un directorio con el nombre de ['models'], En el cual vamos a ir creando cada uno de los modelos. Es recomendable Capitalizar la primera letra del nombre para la definición de archivos.

## Cómo crear Controladores

Los controladores son importantes para nuestro proyecto (_definen el comportamiento según las rutas o solicitudes registradas en nuestro servicio Server_) y definirlos aparte aún más importante para mantener la consistencia y el orden en nuestro proyecto, Por ello debemos de definirlos aparte. Para ello lo hacemos en un directorio aparte el cual definiremos como ["controllers"].

## ¿Cómo tomar las Peticiones Tipo POST desde un formulario?
Cuando tenemos un formulario en nuestra vista la cual establece o tiene un tipo de método de formulario como puede ser POST debemo establecer en nuestro servidor el cómo vamos a tomar esa petición. en el formulario con la propiedad [action=""] le establecemos hacia qué dirección va a llevar dicha petición.

```pug
form(action="/page" method="POST") //-- Se vería algo así
    ...
```
Pues lo que vamos a hacer es capturar ese evento en la url a la cual enviamos el formulario para luego ejecutar nuestro controlador.

```javascript
router.post('/page',controller) //De esta manera registramos la petición
```

En el controllador de este método debemos de tener una forma de acceder a los valores que estamos enviando por medio del formulario.

### ¿ Cómo accedemos a estos valores desde el controlador?

El controlador es el que recibe la request de nuestro formulario por medio del método POST, para eso podemos hacer uso de el Objeto _request_ del cual podemos acceder en el primer parámetro del controlador. Este objeto nos permite acceder a la propiedad _body_ la cual va a contener el objeto con los valores del formulario.

## Express Validator, Valida los formularios

Valida los formularios en el controlador extrayendo los valores en _req.body[values]_.

# Variables de Entorno
Las variables de entorno hacen referencia a un valor que se establece según el entorno en el que se esté ejecutando nuestra aplicación.

Es algo muy común de los sistemas.

# Dotenv (env: Enviroment Variable)

Es una herramienta que nos permite cargar y hacer accesible por medio de un objeto llamado _process_ todos los valores almacenados en archivos __*.env*__.

No es ley, pero se recomiendo manejar estas variables de entorno para asuntos que requieran más seguridad, como lo son nuestras credenciales hacia la base de Datos.

# Crear nuestro repositorio

