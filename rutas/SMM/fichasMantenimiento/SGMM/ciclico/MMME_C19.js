'use strict'

var express = require('express');//carga express
var mmmeC19Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C19');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC19Controller.getAllMaintenenceMMME_C19);
api.post('/mmmeC19-save', mmmeC19Controller.createMaintenenceMMME_C19);
api.put('/update-mmmeC19/:id', mmmeC19Controller.editMMME_C19Data);
api.get('/get-history/:id', mmmeC19Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC19Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC19Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC19Controller.checkedApprovalByWorker);
api.get('/mmmeC19/:id', mmmeC19Controller.getMMME_C19Data);

module.exports = api;//exporta el api