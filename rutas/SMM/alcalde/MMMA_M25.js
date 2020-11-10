'use strict'

var express = require('express');//carga express
var mmmaM25Controller = require('../../../controllers/smm/mayor/MMMA_M25');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM25Controller.getAllMaintenenceMMMA_M25);
api.post('/mmmaM25-save', mmmaM25Controller.createMaintenenceMMMA_M25);
api.put('/update-mmmaM25/:id', mmmaM25Controller.editMMMA_M25Data);
api.get('/get-history/:id', mmmaM25Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM25Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM25Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM25Controller.checkedApprovalByWorker);
api.get('/mmmaM25/:id', mmmaM25Controller.getMMMA_M25Data);

module.exports = api;//exporta el api