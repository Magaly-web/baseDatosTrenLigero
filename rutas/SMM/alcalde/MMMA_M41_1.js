'use strict'

var express = require('express');//carga express
var mmmaM41_1Controller = require('../../../controllers/smm/mayor/MMMA_M41_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM41_1Controller.getAllMaintenenceMMMA_M41_1);
api.post('/mmmaM41_1-save', mmmaM41_1Controller.createMaintenenceMMMA_M41_1);
api.put('/update-mmmaM41_1/:id', mmmaM41_1Controller.editMMMA_M41_1Data);
api.get('/get-history/:id', mmmaM41_1Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM41_1Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM41_1Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM41_1Controller.checkedApprovalByWorker);
api.get('/mmmaM41_1/:id', mmmaM41_1Controller.getMMMA_M41_1Data);

module.exports = api;//exporta el api