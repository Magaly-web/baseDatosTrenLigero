'use strict'

var express = require('express');//carga express
var mmmaM29Controller = require('../../../controllers/smm/mayor/MMMA_M29');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM29Controller.getAllMaintenenceMMMA_M29);
api.post('/mmmaM29-save', mmmaM29Controller.createMaintenenceMMMA_M29);
api.put('/update-mmmaM29/:id', mmmaM29Controller.editMMMA_M29Data);
api.get('/get-history/:id', mmmaM29Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM29Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM29Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM29Controller.checkedApprovalByWorker);
api.get('/mmmaM29/:id', mmmaM29Controller.getMMMA_M29Data);

module.exports = api;//exporta el api