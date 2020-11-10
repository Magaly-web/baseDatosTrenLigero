'use strict'

var express = require('express');//carga express
var memeB01Controller = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/MEME_B01');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', memeB01Controller.getAllMaintenenceMEME_B01);
api.post('/memeB01-save', memeB01Controller.createMaintenenceMEME_B01);
api.put('/update-memeB01/:id', memeB01Controller.editMEME_B01Data);
api.get('/get-history/:id', memeB01Controller.getHistoryOF);
api.put('/historyUpdate/:id', memeB01Controller.addNewHistoryrecord);
api.get('/getState/:id', memeB01Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', memeB01Controller.checkedApprovalByWorker);
api.get('/memeB01/:id', memeB01Controller.getMEME_B01Data);

module.exports = api;//exporta el api