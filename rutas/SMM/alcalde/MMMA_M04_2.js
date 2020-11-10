'use strict'

var express = require('express');//carga express
var mmmaM04_2Controller = require('../../../controllers/smm/mayor/MMMA_M04_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM04_2Controller.getAllMaintenenceMMMA_M04_2);
api.post('/mmmaM04_2-save', mmmaM04_2Controller.createMaintenenceMMMA_M04_2);
api.put('/update-mmmaM04_2/:id', mmmaM04_2Controller.editMMMA_M04_2Data);
api.get('/get-history/:id', mmmaM04_2Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM04_2Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM04_2Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM04_2Controller.checkedApprovalByWorker);
api.get('/mmmaM04_2/:id', mmmaM04_2Controller.getMMMA_M04_2Data);

module.exports = api;//exporta el api