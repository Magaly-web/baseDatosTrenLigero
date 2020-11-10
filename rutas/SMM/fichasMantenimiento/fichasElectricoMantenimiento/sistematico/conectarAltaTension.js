'use strict'

var express = require('express');//carga express
var conectarATController = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/conectarAltaTension');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.  

api.get('/all-forms', conectarATController.getAllMaintenenceconectarAT);
api.post('/conectarAT-save', conectarATController.createMaintenenceconectarAT);
api.put('/update-conectarAT/:id', conectarATController.editconectarATData);
api.get('/get-history/:id', conectarATController.getHistoryOF);
api.put('/historyUpdate/:id', conectarATController.addNewHistoryrecord);
api.get('/getState/:id', conectarATController.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', conectarATController.checkedApprovalByWorker);
api.get('/conectarAT/:id', conectarATController.getconectarATData);

module.exports = api;//exporta el api