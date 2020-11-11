'use strict'

var express = require('express');//carga express
var mmmeC21_2Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C21_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC21_2Controller.getAllMaintenenceMMME_C21_2);
api.post('/mmmeC21_2-save', mmmeC21_2Controller.createMaintenenceMMME_C21_2);
api.put('/update-mmmeC21_2/:id', mmmeC21_2Controller.editMMME_C21_2Data);
api.get('/get-history/:id', mmmeC21_2Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC21_2Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC21_2Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC21_2Controller.checkedApprovalByWorker);
api.get('/mmmeC21_2/:id', mmmeC21_2Controller.getMMME_C21_2Data);

module.exports = api;//exporta el api