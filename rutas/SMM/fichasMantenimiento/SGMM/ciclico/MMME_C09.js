'use strict'

var express = require('express');//carga express
var mmmeC09Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C09');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC09Controller.getAllMaintenenceMMME_C09);
api.post('/mmmeC09-save', mmmeC09Controller.createMaintenenceMMME_C09);
api.put('/update-mmmeC09/:id', mmmeC09Controller.editMMME_C09Data);
api.get('/get-history/:id', mmmeC09Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC09Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC09Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC09Controller.checkedApprovalByWorker);
api.get('/mmmeC09/:id', mmmeC09Controller.getMMME_C09Data);

module.exports = api;//exporta el api