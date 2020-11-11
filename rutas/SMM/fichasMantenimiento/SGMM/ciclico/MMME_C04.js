'use strict'

var express = require('express');//carga express
var mmmeC04Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C04');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC04Controller.getAllMaintenenceMMME_C04);
api.post('/mmmeC04-save', mmmeC04Controller.createMaintenenceMMME_C04);
api.put('/update-mmmeC04/:id', mmmeC04Controller.editMMME_C04Data);
api.get('/get-history/:id', mmmeC04Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC04Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC04Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC04Controller.checkedApprovalByWorker);
api.get('/mmmeC04/:id', mmmeC04Controller.getMMME_C04Data);

module.exports = api;//exporta el api