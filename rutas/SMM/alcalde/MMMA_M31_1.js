'use strict'

var express = require('express');//carga express
var mmmaM31_1Controller = require('../../../controllers/smm/mayor/MMMA_M31_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM31_1Controller.getAllMaintenenceMMMA_M31_1);
api.post('/mmmaM31_1-save', mmmaM31_1Controller.createMaintenenceMMMA_M31_1);
api.put('/update-mmmaM31_1/:id', mmmaM31_1Controller.editMMMA_M31_1Data);
api.get('/get-history/:id', mmmaM31_1Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM31_1Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM31_1Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM31_1Controller.checkedApprovalByWorker);
api.get('/mmmaM31_1/:id', mmmaM31_1Controller.getMMMA_M31_1Data);

module.exports = api;//exporta el api