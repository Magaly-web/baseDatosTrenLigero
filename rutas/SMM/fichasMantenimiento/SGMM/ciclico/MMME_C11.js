'use strict'

var express = require('express');//carga express
var mmmeC11Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C11');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC11Controller.getAllMaintenenceMMME_C11);
api.post('/mmmeC11-save', mmmeC11Controller.createMaintenenceMMME_C11);
api.put('/update-mmmeC11/:id', mmmeC11Controller.editMMME_C11Data);
api.get('/get-history/:id', mmmeC11Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC11Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC11Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC11Controller.checkedApprovalByWorker);
api.get('/mmmeC11/:id', mmmeC11Controller.getMMME_C11Data);

module.exports = api;//exporta el api