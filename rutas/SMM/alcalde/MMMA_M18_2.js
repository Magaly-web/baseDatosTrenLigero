'use strict'

var express = require('express');//carga express
var mmmaM18_2Controller = require('../../../controllers/smm/mayor/MMMA_M18_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM18_2Controller.getAllMaintenenceMMMA_M18_2);
api.post('/mmmaM18_2-save', mmmaM18_2Controller.createMaintenenceMMMA_M18_2);
api.put('/update-mmmaM18_2/:id', mmmaM18_2Controller.editMMMA_M18_2Data);
api.get('/get-history/:id', mmmaM18_2Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM18_2Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM18_2Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM18_2Controller.checkedApprovalByWorker);
api.get('/mmmaM18_2/:id', mmmaM18_2Controller.getMMMA_M18_2Data);

module.exports = api;//exporta el api