'use strict'

var express = require('express');//carga express
var mmmeC02Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C02');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC02Controller.getAllMaintenenceMMME_C02);
api.post('/mmmeC02-save', mmmeC02Controller.createMaintenenceMMME_C02);
api.put('/update-mmmeC02/:id', mmmeC02Controller.editMMME_C02Data);
api.get('/get-history/:id', mmmeC02Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC02Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC02Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC02Controller.checkedApprovalByWorker);
api.get('/mmmeC02/:id', mmmeC02Controller.getMMME_C02Data);

module.exports = api;//exporta el api