'use strict'

var express = require('express');//carga express
var mmmeC03Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C03');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC03Controller.getAllMaintenenceMMME_C03);
api.post('/mmmeC03-save', mmmeC03Controller.createMaintenenceMMME_C03);
api.put('/update-mmmeC03/:id', mmmeC03Controller.editMMME_C03Data);
api.get('/get-history/:id', mmmeC03Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC03Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC03Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC03Controller.checkedApprovalByWorker);
api.get('/mmmeC03/:id', mmmeC03Controller.getMMME_C03Data);

module.exports = api;//exporta el api