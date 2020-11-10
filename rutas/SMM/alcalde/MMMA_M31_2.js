'use strict'

var express = require('express');//carga express
var mmmaM31_2Controller = require('../../../controllers/smm/mayor/MMMA_M31_2');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM31_2Controller.getAllMaintenenceMMMA_M31_2);
api.post('/mmmaM31_2-save', mmmaM31_2Controller.createMaintenenceMMMA_M31_2);
api.put('/update-mmmaM31_2/:id', mmmaM31_2Controller.editMMMA_M31_2Data);
api.get('/get-history/:id', mmmaM31_2Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM31_2Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM31_2Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM31_2Controller.checkedApprovalByWorker);
api.get('/mmmaM31_2/:id', mmmaM31_2Controller.getMMMA_M31_2Data);

module.exports = api;//exporta el api