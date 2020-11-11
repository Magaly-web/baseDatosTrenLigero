'use strict'

var express = require('express');//carga express
var mmmeC05Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C05');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC05Controller.getAllMaintenenceMMME_C05);
api.post('/mmmeC05-save', mmmeC05Controller.createMaintenenceMMME_C05);
api.put('/update-mmmeC05/:id', mmmeC05Controller.editMMME_C05Data);
api.get('/get-history/:id', mmmeC05Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC05Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC05Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC05Controller.checkedApprovalByWorker);
api.get('/mmmeC05/:id', mmmeC05Controller.getMMME_C05Data);

module.exports = api;//exporta el api