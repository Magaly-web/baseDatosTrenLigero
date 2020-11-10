'use strict'

var express = require('express');//carga express
var memeB05_612Controller = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/MEME_B05_612');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.  

api.get('/all-forms', memeB05_612Controller.getAllMaintenenceMEME_B05_612);
api.post('/memeB05_612-save', memeB05_612Controller.createMaintenenceMEME_B05_612);
api.put('/update-memeB05_612/:id', memeB05_612Controller.editMEME_B05_612Data);
api.get('/get-history/:id', memeB05_612Controller.getHistoryOF);
api.put('/historyUpdate/:id', memeB05_612Controller.addNewHistoryrecord);
api.get('/getState/:id', memeB05_612Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', memeB05_612Controller.checkedApprovalByWorker);
api.get('/memeB05_612/:id', memeB05_612Controller.getMEME_B05_612Data);

module.exports = api;//exporta el api