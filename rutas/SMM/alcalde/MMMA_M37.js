'use strict'

var express = require('express');//carga express
var mmmaM37Controller = require('../../../controllers/smm/mayor/MMMA_M37');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM37Controller.getAllMaintenenceMMMA_M37);
api.post('/mmmaM37-save', mmmaM37Controller.createMaintenenceMMMA_M37);
api.put('/update-mmmaM37/:id', mmmaM37Controller.editMMMA_M37Data);
api.get('/get-history/:id', mmmaM37Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM37Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM37Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM37Controller.checkedApprovalByWorker);
api.get('/mmmaM37/:id', mmmaM37Controller.getMMMA_M37Data);

module.exports = api;//exporta el api