'use strict'

var express = require('express');//carga express
var mmmeC08Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C08');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC08Controller.getAllMaintenenceMMME_C08);
api.post('/mmmeC08-save', mmmeC08Controller.createMaintenenceMMME_C08);
api.put('/update-mmmeC08/:id', mmmeC08Controller.editMMME_C08Data);
api.get('/get-history/:id', mmmeC08Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC08Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC08Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC08Controller.checkedApprovalByWorker);
api.get('/mmmeC08/:id', mmmeC08Controller.getMMME_C08Data);

module.exports = api;//exporta el api