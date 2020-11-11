'use strict'

var express = require('express');//carga express
var mmmeB02Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/sistematico/MMME_B02');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeB02Controller.getAllMaintenenceMMME_B02);
api.post('/mmmeB02-save', mmmeB02Controller.createMaintenenceMMME_B02);
api.put('/update-mmmeB02/:id', mmmeB02Controller.editMMME_B02Data);
api.get('/get-history/:id', mmmeB02Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeB02Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeB02Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeB02Controller.checkedApprovalByWorker);
api.get('/mmmeB02/:id', mmmeB02Controller.getMMME_B02Data);

module.exports = api;//exporta el api