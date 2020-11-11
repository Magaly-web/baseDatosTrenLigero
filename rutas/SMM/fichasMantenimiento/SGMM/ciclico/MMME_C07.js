'use strict'

var express = require('express');//carga express
var mmmeC07Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C07');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC07Controller.getAllMaintenenceMMME_C07);
api.post('/mmmeC07-save', mmmeC07Controller.createMaintenenceMMME_C07);
api.put('/update-mmmeC07/:id', mmmeC07Controller.editMMME_C07Data);
api.get('/get-history/:id', mmmeC07Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC07Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC07Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC07Controller.checkedApprovalByWorker);
api.get('/mmmeC07/:id', mmmeC07Controller.getMMME_C07Data);

module.exports = api;//exporta el api