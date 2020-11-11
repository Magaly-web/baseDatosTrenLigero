'use strict'

var express = require('express');//carga express
var mmmeB04Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/sistematico/MMME_B04');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeB04Controller.getAllMaintenenceMMME_B04);
api.post('/mmmeB04-save', mmmeB04Controller.createMaintenenceMMME_B04);
api.put('/update-mmmeB04/:id', mmmeB04Controller.editMMME_B04Data);
api.get('/get-history/:id', mmmeB04Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeB04Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeB04Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeB04Controller.checkedApprovalByWorker);
api.get('/mmmeB04/:id', mmmeB04Controller.getMMME_B04Data);

module.exports = api;//exporta el api