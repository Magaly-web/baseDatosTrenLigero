'use strict'

var express = require('express');//carga express
var mmmaM36Controller = require('../../../controllers/smm/mayor/MMMA_M36');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM36Controller.getAllMaintenenceMMMA_M36);
api.post('/mmmaM36-save', mmmaM36Controller.createMaintenenceMMMA_M36);
api.put('/update-mmmaM36/:id', mmmaM36Controller.editMMMA_M36Data);
api.get('/get-history/:id', mmmaM36Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM36Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM36Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM36Controller.checkedApprovalByWorker);
api.get('/mmmaM36/:id', mmmaM36Controller.getMMMA_M36Data);

module.exports = api;//exporta el api