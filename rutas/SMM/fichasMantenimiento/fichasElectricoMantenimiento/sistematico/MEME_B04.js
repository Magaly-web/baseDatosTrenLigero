'use strict'

var express = require('express');//carga express
var memeB04Controller = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/MEME_B04');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', memeB04Controller.getAllMaintenenceMEME_B04);
api.post('/memeB04-save', memeB04Controller.createMaintenenceMEME_B04);
api.put('/update-memeB04/:id', memeB04Controller.editMEME_B04Data);
api.get('/get-history/:id', memeB04Controller.getHistoryOF);
api.put('/historyUpdate/:id', memeB04Controller.addNewHistoryrecord);
api.get('/getState/:id', memeB04Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', memeB04Controller.checkedApprovalByWorker);
api.get('/memeB04/:id', memeB04Controller.getMEME_B04Data);

module.exports = api;//exporta el api