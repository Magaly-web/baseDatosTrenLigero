'use strict'

var express = require('express');//carga express
var mmmaM57_1Controller = require('../../../controllers/smm/mayor/MMMA_M57_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM57_1Controller.getAllMaintenenceMMMA_M57_1);
api.post('/mmmaM57_1-save', mmmaM57_1Controller.createMaintenenceMMMA_M57_1);
api.put('/update-mmmaM57_1/:id', mmmaM57_1Controller.editMMMA_M57_1Data);
api.get('/get-history/:id', mmmaM57_1Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM57_1Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM57_1Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM57_1Controller.checkedApprovalByWorker);
api.get('/mmmaM57_1/:id', mmmaM57_1Controller.getMMMA_M57_1Data);

module.exports = api;//exporta el api