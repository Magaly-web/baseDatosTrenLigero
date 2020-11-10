'use strict'

var express = require('express');//carga express
var memeB05_9Controller = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/MEME_B05_9');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.   

api.get('/all-forms', memeB05_9Controller.getAllMaintenenceMEME_B05_9);
api.post('/memeB05_9-save', memeB05_9Controller.createMaintenenceMEME_B05_9);
api.put('/update-memeB05_9/:id', memeB05_9Controller.editMEME_B05_9Data);
api.get('/get-history/:id', memeB05_9Controller.getHistoryOF);
api.put('/historyUpdate/:id', memeB05_9Controller.addNewHistoryrecord);
api.get('/getState/:id', memeB05_9Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', memeB05_9Controller.checkedApprovalByWorker);
api.get('/memeB05_9/:id', memeB05_9Controller.getMEME_B05_9Data);

module.exports = api;//exporta el api