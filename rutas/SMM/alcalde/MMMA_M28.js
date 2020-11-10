'use strict'

var express = require('express');//carga express
var mmmaM28Controller = require('../../../controllers/smm/mayor/MMMA_M28');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM28Controller.getAllMaintenenceMMMA_M28);
api.post('/mmmaM28-save', mmmaM28Controller.createMaintenenceMMMA_M28);
api.put('/update-mmmaM28/:id', mmmaM28Controller.editMMMA_M28Data);
api.get('/get-history/:id', mmmaM28Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM28Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM28Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM28Controller.checkedApprovalByWorker);
api.get('/mmmaM28/:id', mmmaM28Controller.getMMMA_M28Data);

module.exports = api;//exporta el api