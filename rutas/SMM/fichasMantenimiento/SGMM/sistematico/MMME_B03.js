'use strict'

var express = require('express');//carga express
var mmmeB03Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/sistematico/MMME_B03');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeB03Controller.getAllMaintenenceMMME_B03);
api.post('/mmmeB03-save', mmmeB03Controller.createMaintenenceMMME_B03);
api.put('/update-mmmeB03/:id', mmmeB03Controller.editMMME_B03Data);
api.get('/get-history/:id', mmmeB03Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeB03Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeB03Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeB03Controller.checkedApprovalByWorker);
api.get('/mmmeB03/:id', mmmeB03Controller.getMMME_B03Data);

module.exports = api;//exporta el api