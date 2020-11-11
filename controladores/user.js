'use strict'//standares de javascript

var fs= require('fs');
var path = require('path');
var moment = require('moment');
var bcrypt = require('bcrypt-nodejs');//cargamos el modulo bcrypt que nos permite cifrar la contraseña
var User = require('../models/user');//La primera letra se le pone en mayuscula para indicar que es un modelo, agregamos la direccion del esquema
var jwt = require('../services/jwt');//cargamos el servicio

//creamos las acciones por medio de funciones
//METODOS DE PRUEBA
function home(req, res){ //Ruta en la raiz
    res.status(200).send({
        message: 'HOLA MUNDO servidor de NodeJS controller usuario'
    });
}

function pruebas(req, res){//ruta con una direccion
    console.log(req.body);//Verificamos que datos esta recibiendo el backendpor el metodo de pruebas
    res.status(200).send({
        message: 'Accion de pruebas en el servidor de NodeJS controller usuario'
    });
}

//REGISTRO DE USUARIOS
function saveUser(req, res){//Funcion para guardar nuevos usuarios
    var params =req.body;//recoger los parametros que nos lleguen y se guardan en esta variable
    var user = new User();//creamos la instancia de un nuevo usuario
    
//comparar los parametros que nos llegan
    if(params.name && params.surname && params.expediente && params.categoria
        && params.turno && params.password && params.anioIngreso){
            //seteamos la informacion a cada campo del esquema
            user.name = params.name;
            user.surname = params.surname;
            user.anioIngreso = params.anioIngreso;
            //user.añoIngreso = moment().format('DD/MM/YYYY HH:mm');
            user.expediente = params.expediente;
            user.turno = params.turno;
            user.categoria = params.categoria;
            user.role = 'ROLE_USER';
            user.image = null;
            

            //Metodo para el control de usuarios duplicados(Busca todos los registros que contengan como email o expediente)
            User.find({expediente: user.expediente}
                        ).exec((err, users) => {
                            if(err) return res.status(500).send({message: 'Error en la peticion de Usuarios'});
                            
                            if(users && users.length >=1){
                                return res.status(200).send({ message: 'El usuario que intestas registrar ya existe'});
                            }else{
                                  //Cifrado de la contraseña de la contraseña 
                                 bcrypt.hash(params.password, null, null, (err,hash)=>{
                                    user.password =hash;

                                        user.save((err, userStored) =>{
                                            if(err)return res.status(500).send({
                                                message: 'Error al guardar el usuario'
                                            });
                                                if(userStored){ //si el usuario envia todos los datos corectamente envia todos los datos que se guardaron en la BD
                                                    res.status(200).send({user: userStored});
                                                }else{
                                                    res.status(404).send({message: 'No se ha registrado el usuario'});
                                                }
                                        });
                                 });
                            }
                        });    
    }else{
        res.status(200).send({
            message: 'Envia todos los campos necesarios!!'
        });
    }
}


//METODO DE LOGIN
//Login
function loginUser(req, res){
    var params = req.body;//recoge los parametros que lleguen por post

    var expediente = params.expediente;
    var password = params.password;

    User.findOne({expediente: expediente}, (err, user) => {//findOne selecciona un solo registro
        if(err) return res.status(500).send({message: 'Error en la peticion'});

        if(user){
            bcrypt.compare(password, user.password, (err, check) => {//se compara la password que se recibe con la password que esta en la BD
                if(check){
                    if(params.gettoken){
                        //generar y devolver token
                        return res.status(200).send({
                            token: jwt.createToken(user)
                        });
                    }else{
                        //devolver datos del usuario
                        user.password = undefined;//elimina el encriptado de contraseña de la vista y solo lo deja a vista del back-end
                        return res.status(200).send({user});
                    }
                    
                }else{
                    return res.status(404).send({message: 'Error el usuario no se ha podido identificar'});
                }
            });
        }else{
            return res.status(404).send({message: 'El usuario no se ha podido identificar!!'});
        }
    });
}

//METODO PARA LOS USUARIOS(CONSEGUIR DATOS DEL USUARIO)
function getUser(req, res){
    var userId = req.params.id; //recoger el id del usuario params porque nos llegan los datos por url
    //usamos body cuando nos llegan datos por post o put
    User.findById(userId, (err, user) =>{
        if(err) return res.status(500).send({message: 'Error en la peticion'});
        if(!user) return res.status(404).send({message: 'El usuario no existe'});//comprobar si el usuario no llega

        return res.status(200).send({user}); //devuelve los datos del usuario que se esta solicitando por el url
    }) ;
}
//METODO QUE TE DEVUELVE TODOS LOS USUARIOS LISTADOS, PAGINADOS
//ACTUALIZACION DE LOS DATOS DE USUARIO
function updateUser(req, res){
    var userId = req.params.id;
    var update = req.body;
    //borrar propiedad password
    delete update.password;
    if(userId != req.user.sub){
        return res.status(500).send({message: 'No tienes permisos de actualizar datos del usuario'});
    }
    User.findByIdAndUpdate(userId, update,{new:true}, (err, userUpdated) => {
        if(err) res.status(500).send({message: 'Error en la peticion'});
        if(!userUpdated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
        return res.status(200).send({user: userUpdated});
    })
}
//SUBIR ARCHIVOS DE IMAGEN
//subir archivos de imagen / avatar de usuario
function uploadImage(req, res){
    var userId = req.params.id;
    if(userId != req.user.sub){
        return res.status(500).send({message: 'No tienes permisos de actualizar datos del usuario'});
    }

    if(req.files){
        var file_path = req.files.image.path;
        console.log(file_path);

        var file_split = file_path.split('/');
        console.log(file_split);

        var file_name = file_split[2];
        console.log(file_name);

        var ext_split = file_name.split('\.');
        console.log(ext_split);

        var file_ext = ext_split[1];
        console.log(file_ext);

        if(userId != req.user.sub){
            return removeFilesOfUploads(res, file_path, 'No tienes permiso para actualizar los datos del usuario');
            
        }

        if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif'){
            //Actualizar documento de usuario logueado
            User.findByIdAndUpdate(userId, {image: file_name}, {new:true}, (err, userUpdated) => {
                if(err) return res.status(500).send({message: 'Error en la peticion'});

                if(!userUpdated) return res.status(404).send({message: 'No se ha podido actualizar el usuario'});

                return res.status(200).send({user: userUpdated});
            });
        }else{
            return removeFilesOfUploads(res, file_path, 'Extencion no valida');
        }

    }else{
        return res.status(200).send({message: 'No se han subido imagenes'});
    }
}

function getImageFile(req, res){
    var image_file = req.params.imageFile;
    var path_file = './uploads/users/'+image_file;

    fs.exists(path_file, (exists) => {
        if(exists){
            res.sendFile(path.resolve(path_file));
        }else{
            res.status(200).send({message: 'No existe la imagen...'});
        }
    });
}
//importamos en forma de objeto para que esten disponibles fuera de este fichero
module.exports ={
    home,
    pruebas,
    saveUser,
    loginUser,
    getUser,
    updateUser,
    uploadImage,
    getImageFile
}