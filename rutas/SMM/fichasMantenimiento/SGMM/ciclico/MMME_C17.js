'use strict'

var express = require('express');//carga express
var mmmeC17Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C17');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC17Controller.getAllMaintenenceMMME_C17);
api.post('/mmmeC17-save', mmmeC17Controller.createMaintenenceMMME_C17);
api.put('/update-mmmeC17/:id', mmmeC17Controller.editMMME_C17Data);
api.get('/get-history/:id', mmmeC17Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC17Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC17Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC17Controller.checkedApprovalByWorker);
api.get('/mmmeC17/:id', mmmeC17Controller.getMMME_C17Data);

module.exports = api;//exporta el api