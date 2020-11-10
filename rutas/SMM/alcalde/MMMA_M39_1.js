'use strict'

var express = require('express');//carga express
var mmmaM39_1Controller = require('../../../controllers/smm/mayor/MMMA_M39_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM39_1Controller.getAllMaintenenceMMMA_M39_1);
api.post('/mmmaM39_1-save', mmmaM39_1Controller.createMaintenenceMMMA_M39_1);
api.put('/update-mmmaM39_1/:id', mmmaM39_1Controller.editMMMA_M39_1Data);
api.get('/get-history/:id', mmmaM39_1Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM39_1Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM39_1Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM39_1Controller.checkedApprovalByWorker);
api.get('/mmmaM39_1/:id', mmmaM39_1Controller.getMMMA_M39_1Data);

module.exports = api;//exporta el api