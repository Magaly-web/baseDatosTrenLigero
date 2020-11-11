'use strict'

var express = require('express');//carga express
var mmmeC06Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C06');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC06Controller.getAllMaintenenceMMME_C06);
api.post('/mmmeC06-save', mmmeC06Controller.createMaintenenceMMME_C06);
api.put('/update-mmmeC06/:id', mmmeC06Controller.editMMME_C06Data);
api.get('/get-history/:id', mmmeC06Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC06Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC06Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC06Controller.checkedApprovalByWorker);
api.get('/mmmeC06/:id', mmmeC06Controller.getMMME_C06Data);

module.exports = api;//exporta el api