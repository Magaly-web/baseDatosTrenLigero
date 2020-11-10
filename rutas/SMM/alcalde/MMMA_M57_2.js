'use strict'

var express = require('express');//carga express
var mmmaM57_2Controller = require('../../../controllers/smm/mayor/MMMA_M57_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM57_2Controller.getAllMaintenenceMMMA_M57_2);
api.post('/mmmaM57_2-save', mmmaM57_2Controller.createMaintenenceMMMA_M57_2);
api.put('/update-mmmaM57_2/:id', mmmaM57_2Controller.editMMMA_M57_2Data);
api.get('/get-history/:id', mmmaM57_2Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM57_2Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM57_2Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM57_2Controller.checkedApprovalByWorker);
api.get('/mmmaM57_2/:id', mmmaM57_2Controller.getMMMA_M57_2Data);

module.exports = api;//exporta el api