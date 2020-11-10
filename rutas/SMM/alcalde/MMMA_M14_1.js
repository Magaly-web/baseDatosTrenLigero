'use strict'

var express = require('express');//carga express
var mmmaM14_1Controller = require('../../../controllers/smm/mayor/MMMA_M14_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM14_1Controller.getAllMaintenenceMMMA_M14_1);
api.post('/mmmaM14_1-save', mmmaM14_1Controller.createMaintenenceMMMA_M14_1);
api.put('/update-mmmaM14_1/:id', mmmaM14_1Controller.editMMMA_M14_1Data);
api.get('/get-history/:id', mmmaM14_1Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM14_1Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM14_1Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM14_1Controller.checkedApprovalByWorker);
api.get('/mmmaM14_1/:id', mmmaM14_1Controller.getMMMA_M14_1Data);

module.exports = api;//exporta el api