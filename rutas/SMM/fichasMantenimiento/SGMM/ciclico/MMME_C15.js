'use strict'

var express = require('express');//carga express
var mmmeC15Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C15');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC15Controller.getAllMaintenenceMMME_C15);
api.post('/mmmeC15-save', mmmeC15Controller.createMaintenenceMMME_C15);
api.put('/update-mmmeC15/:id', mmmeC15Controller.editMMME_C15Data);
api.get('/get-history/:id', mmmeC15Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC15Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC15Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC15Controller.checkedApprovalByWorker);
api.get('/mmmeC15/:id', mmmeC15Controller.getMMME_C15Data);

module.exports = api;//exporta el api