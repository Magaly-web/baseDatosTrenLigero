'use strict'

var express = require('express');//carga express
var mmmeC16Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C16');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC16Controller.getAllMaintenenceMMME_C16);
api.post('/mmmeC16-save', mmmeC16Controller.createMaintenenceMMME_C16);
api.put('/update-mmmeC16/:id', mmmeC16Controller.editMMME_C16Data);
api.get('/get-history/:id', mmmeC16Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC16Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC16Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC16Controller.checkedApprovalByWorker);
api.get('/mmmeC16/:id', mmmeC16Controller.getMMME_C16Data);

module.exports = api;//exporta el api