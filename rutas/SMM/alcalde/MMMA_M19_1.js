'use strict'

var express = require('express');//carga express
var mmmaM19_1Controller = require('../../../controllers/smm/mayor/MMMA_M19_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM19_1Controller.getAllMaintenenceMMMA_M19_1);
api.post('/mmmaM19_1-save', mmmaM19_1Controller.createMaintenenceMMMA_M19_1);
api.put('/update-mmmaM19_1/:id', mmmaM19_1Controller.editMMMA_M19_1Data);
api.get('/get-history/:id', mmmaM19_1Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM19_1Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM19_1Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM19_1Controller.checkedApprovalByWorker);
api.get('/mmmaM19_1/:id', mmmaM19_1Controller.getMMMA_M19_1Data);

module.exports = api;//exporta el api