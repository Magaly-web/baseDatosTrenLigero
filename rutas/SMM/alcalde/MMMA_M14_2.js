'use strict'

var express = require('express');//carga express
var mmmaM14_2Controller = require('../../../controllers/smm/mayor/MMMA_M14_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM14_2Controller.getAllMaintenenceMMMA_M14_2);
api.post('/mmmaM14_2-save', mmmaM14_2Controller.createMaintenenceMMMA_M14_2);
api.put('/update-mmmaM14_2/:id', mmmaM14_2Controller.editMMMA_M14_2Data);
api.get('/get-history/:id', mmmaM14_2Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM14_2Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM14_2Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM14_2Controller.checkedApprovalByWorker);
api.get('/mmmaM14_2/:id', mmmaM14_2Controller.getMMMA_M14_2Data);

module.exports = api;//exporta el api