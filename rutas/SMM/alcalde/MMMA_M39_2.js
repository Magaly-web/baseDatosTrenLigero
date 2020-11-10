'use strict'

var express = require('express');//carga express
var mmmaM39_2Controller = require('../../../controllers/smm/mayor/MMMA_M39_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM39_2Controller.getAllMaintenenceMMMA_M39_2);
api.post('/mmmaM39_2-save', mmmaM39_2Controller.createMaintenenceMMMA_M39_2);
api.put('/update-mmmaM39_2/:id', mmmaM39_2Controller.editMMMA_M39_2Data);
api.get('/get-history/:id', mmmaM39_2Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM39_2Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM39_2Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM39_2Controller.checkedApprovalByWorker);
api.get('/mmmaM39_2/:id', mmmaM39_2Controller.getMMMA_M39_2Data);

module.exports = api;//exporta el api