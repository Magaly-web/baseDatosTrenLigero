'use strict'

var express = require('express');//carga express
var mmmeC18Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C18');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC18Controller.getAllMaintenenceMMME_C18);
api.post('/mmmeC18-save', mmmeC18Controller.createMaintenenceMMME_C18);
api.put('/update-mmmeC18/:id', mmmeC18Controller.editMMME_C18Data);
api.get('/get-history/:id', mmmeC18Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC18Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC18Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC18Controller.checkedApprovalByWorker);
api.get('/mmmeC18/:id', mmmeC18Controller.getMMME_C18Data);

module.exports = api;//exporta el api