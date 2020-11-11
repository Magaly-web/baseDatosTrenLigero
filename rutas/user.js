'use strict'

var express = require('express');//cargamos express
var UserController = require('../controllers/user');//cargamos es controlador de control de usuario

var api = express.Router();//se carga el api con router para tener acceso a los metodos
var md_auth = require('../middlewares/authenticated');//carga el objeto para tenerlo disponible en este fichero

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/users'});

api.get('/home', UserController.home);//Cargamos la ruta y le indicamos el metodo a cargar
api.get('/pruebas', md_auth.ensureAuth, UserController.pruebas);
// el segundo parametro "md_auth.ensureAuth" va a pasar por middleware y me identificara si el token es correcto, si es correcto para a UserController.pruebas
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);
api.get('/user/:id', md_auth.ensureAuth, UserController.getUser);
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);
api.post('/upload-image-user/:id', [md_auth.ensureAuth, md_upload], UserController.uploadImage);
api.get('/get-image-user/:imageFile', UserController.getImageFile);
//exportamos
module.exports = api;