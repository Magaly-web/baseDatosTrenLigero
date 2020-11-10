'use strict'

var express = require('express');//carga express
var memeB01PSController = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/MEME_B01PS');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', memeB01PSController.getAllMaintenenceMEME_B01PS);
api.post('/memeB01PS-save', memeB01PSController.createMaintenenceMEME_B01PS);
api.put('/update-memeB01PS/:id', memeB01PSController.editMEME_B01PSData);
api.get('/get-history/:id', memeB01PSController.getHistoryOF);
api.put('/historyUpdate/:id', memeB01PSController.addNewHistoryrecord);
api.get('/getState/:id', memeB01PSController.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', memeB01PSController.checkedApprovalByWorker);
api.get('/memeB01PS/:id', memeB01PSController.getMEME_B01PSData);

module.exports = api;//exporta el api