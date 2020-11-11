'use strict'

var express = require('express');//carga express
var mmmeC10Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C10');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC10Controller.getAllMaintenenceMMME_C10);
api.post('/mmmeC10-save', mmmeC10Controller.createMaintenenceMMME_C10);
api.put('/update-mmmeC10/:id', mmmeC10Controller.editMMME_C10Data);
api.get('/get-history/:id', mmmeC10Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC10Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC10Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC10Controller.checkedApprovalByWorker);
api.get('/mmmeC10/:id', mmmeC10Controller.getMMME_C10Data);

module.exports = api;//exporta el api