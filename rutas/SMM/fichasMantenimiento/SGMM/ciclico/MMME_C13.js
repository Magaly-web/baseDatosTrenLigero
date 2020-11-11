'use strict'

var express = require('express');//carga express
var mmmeC13Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C13');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC13Controller.getAllMaintenenceMMME_C13);
api.post('/mmmeC13-save', mmmeC13Controller.createMaintenenceMMME_C13);
api.put('/update-mmmeC13/:id', mmmeC13Controller.editMMME_C13Data);
api.get('/get-history/:id', mmmeC13Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC13Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC13Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC13Controller.checkedApprovalByWorker);
api.get('/mmmeC13/:id', mmmeC13Controller.getMMME_C13Data);

module.exports = api;//exporta el api