'use strict'

var express = require('express');//carga express
var mmmaM19_2Controller = require('../../../controllers/smm/mayor/MMMA_M19_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM19_2Controller.getAllMaintenenceMMMA_M19_2);
api.post('/mmmaM19_2-save', mmmaM19_2Controller.createMaintenenceMMMA_M19_2);
api.put('/update-mmmaM19_2/:id', mmmaM19_2Controller.editMMMA_M19_2Data);
api.get('/get-history/:id', mmmaM19_2Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM19_2Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM19_2Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM19_2Controller.checkedApprovalByWorker);
api.get('/mmmaM19_2/:id', mmmaM19_2Controller.getMMMA_M19_2Data);

module.exports = api;//exporta el api