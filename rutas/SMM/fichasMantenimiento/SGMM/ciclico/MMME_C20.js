'use strict'

var express = require('express');//carga express
var mmmeC20Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C20');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC20Controller.getAllMaintenenceMMME_C20);
api.post('/mmmeC20-save', mmmeC20Controller.createMaintenenceMMME_C20);
api.put('/update-mmmeC20/:id', mmmeC20Controller.editMMME_C20Data);
api.get('/get-history/:id', mmmeC20Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC20Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC20Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC20Controller.checkedApprovalByWorker);
api.get('/mmmeC20/:id', mmmeC20Controller.getMMME_C20Data);

module.exports = api;//exporta el api