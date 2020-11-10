'use strict'

var express = require('express');//carga express
var mmmaM64_2Controller = require('../../../controllers/smm/mayor/MMMA_M64_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM64_2Controller.getAllMaintenenceMMMA_M64_2);
api.post('/mmmaM64_2-save', mmmaM64_2Controller.createMaintenenceMMMA_M64_2);
api.put('/update-mmmaM64_2/:id', mmmaM64_2Controller.editMMMA_M64_2Data);
api.get('/get-history/:id', mmmaM64_2Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM64_2Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM64_2Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM64_2Controller.checkedApprovalByWorker);
api.get('/mmmaM64_2/:id', mmmaM64_2Controller.getMMMA_M64_2Data);

module.exports = api;//exporta el api