'use strict'

var express = require('express');//carga express
var mmmeC21_1Controller = require('../../../../..//controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C21_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC21_1Controller.getAllMaintenenceMMME_C21_1);
api.post('/mmmeC21_1-save', mmmeC21_1Controller.createMaintenenceMMME_C21_1);
api.put('/update-mmmeC21_1/:id', mmmeC21_1Controller.editMMME_C21_1Data);
api.get('/get-history/:id', mmmeC21_1Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC21_1Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC21_1Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC21_1Controller.checkedApprovalByWorker);
api.get('/mmmeC21_1/:id', mmmeC21_1Controller.getMMME_C21_1Data);

module.exports = api;//exporta el api