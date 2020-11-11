'use strict'

var mongoose = require('mongoose');//Cargamos el modulo de mongoose
var Schema = mongoose.Schema;//creamos la variable esquema que, nos permite definir un nuevo esquema(objeto)
var UserSchema = Schema({//Definicion de la estructura para el usuario
    name: String,
    surname: String,
    expediente: Number,
    password: String,
    role: String,
    categoria: String,
    image: String,
    anioIngreso: String,
    turno: String
});

module.exports = mongoose.model('User', UserSchema);//lo exportamos para poder utilizar el modelo