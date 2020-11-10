'use strict'

var express = require('express');//carga express
var mmmaM41_2Controller = require('../../../controllers/smm/mayor/MMMA_M41_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM41_2Controller.getAllMaintenenceMMMA_M41_2);
api.post('/mmmaM41_2-save', mmmaM41_2Controller.createMaintenenceMMMA_M41_2);
api.put('/update-mmmaM41_2/:id', mmmaM41_2Controller.editMMMA_M41_2Data);
api.get('/get-history/:id', mmmaM41_2Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM41_2Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM41_2Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM41_2Controller.checkedApprovalByWorker);
api.get('/mmmaM41_2/:id', mmmaM41_2Controller.getMMMA_M41_2Data);

module.exports = api;//exporta el api