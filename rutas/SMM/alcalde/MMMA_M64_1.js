'use strict'

var express = require('express');//carga express
var mmmaM64_1Controller = require('../../../controllers/smm/mayor/MMMA_M64_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM64_1Controller.getAllMaintenenceMMMA_M64_1);
api.post('/mmmaM64_1-save', mmmaM64_1Controller.createMaintenenceMMMA_M64_1);
api.put('/update-mmmaM64_1/:id', mmmaM64_1Controller.editMMMA_M64_1Data);
api.get('/get-history/:id', mmmaM64_1Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM64_1Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM64_1Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM64_1Controller.checkedApprovalByWorker);
api.get('/mmmaM64_1/:id', mmmaM64_1Controller.getMMMA_M64_1Data);

module.exports = api;//exporta el api