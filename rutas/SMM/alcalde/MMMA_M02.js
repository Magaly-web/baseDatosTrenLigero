'use strict'

var express = require('express');//carga express
var mmmaM02Controller = require('../../../controllers/smm/mayor/MMMA_M02');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM02Controller.getAllMaintenenceMMMA_M02);
api.post('/mmmaM02-save', mmmaM02Controller.createMaintenenceMMMA_M02);
api.put('/update-mmmaM02/:id', mmmaM02Controller.editMMMA_M02Data);
api.get('/get-history/:id', mmmaM02Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM02Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM02Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM02Controller.checkedApprovalByWorker);
api.get('/mmmaM02/:id', mmmaM02Controller.getMMMA_M02Data);

module.exports = api;//exporta el api