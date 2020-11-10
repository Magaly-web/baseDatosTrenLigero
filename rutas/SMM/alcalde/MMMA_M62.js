'use strict'

var express = require('express');//carga express
var mmmaM62Controller = require('../../../controllers/smm/mayor/MMMA_M62');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM62Controller.getAllMaintenenceMMMA_M62);
api.post('/mmmaM62-save', mmmaM62Controller.createMaintenenceMMMA_M62);
api.put('/update-mmmaM62/:id', mmmaM62Controller.editMMMA_M62Data);
api.get('/get-history/:id', mmmaM62Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM62Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM62Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM62Controller.checkedApprovalByWorker);
api.get('/mmmaM62/:id', mmmaM62Controller.getMMMA_M62Data);

module.exports = api;//exporta el api