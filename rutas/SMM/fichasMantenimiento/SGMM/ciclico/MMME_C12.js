'use strict'

var express = require('express');//carga express
var mmmeC12Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C12');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC12Controller.getAllMaintenenceMMME_C12);
api.post('/mmmeC12-save', mmmeC12Controller.createMaintenenceMMME_C12);
api.put('/update-mmmeC12/:id', mmmeC12Controller.editMMME_C12Data);
api.get('/get-history/:id', mmmeC12Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC12Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC12Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC12Controller.checkedApprovalByWorker);
api.get('/mmmeC12/:id', mmmeC12Controller.getMMME_C12Data);

module.exports = api;//exporta el api