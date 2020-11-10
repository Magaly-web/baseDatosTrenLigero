'use strict' //Instruccion que nos permite utilizar nuevas caracteristicas de los estandaras de java script

var mongoose = require('mongoose'); //cargamos la libreria de mongoose en una variable (importar)
var app = require('./app');// Cargamos app y como es un fichero se le indica la url
var port = 3800;// Puerto con el cual se va a trabajar

//CONEXION A LA BASE DE DATOS
mongoose.Promise = global.Promise;//Realizamos la conexion mediante el metodo de promesas
mongoose.connect('mongodb://localhost:27017/trenligero',{ useUnifiedTopology: true }) //conexion indicandole la url de la base de datos
        .then(()=> {//metodo que se lanza cuando se conecta a la base de datos.
            console.log("La conexion a la base de datos Trenligero se ha realizado correctamente");

            //CREAR SERVIDOR
            app.listen(port, () => {//Se crea un servidor que nos va escuchar rutas http, recibir datos...
                console.log("Servidor creado correctamente!! en http://localhost:3800");
            });
        })
        .catch(err => console.log(err)); //metodo para capturar el error en caso de no establecer conexion con la base de datos