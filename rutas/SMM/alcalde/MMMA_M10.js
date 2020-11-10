'use strict'

var express = require('express');//carga express
var mmmaM10Controller = require('../../../controllers/smm/mayor/MMMA_M10');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM10Controller.getAllMaintenenceMMMA_M10);
api.post('/mmmaM10-save', mmmaM10Controller.createMaintenenceMMMA_M10);
api.put('/update-mmmaM10/:id', mmmaM10Controller.editMMMA_M10Data);
api.get('/get-history/:id', mmmaM10Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM10Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM10Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM10Controller.checkedApprovalByWorker);
api.get('/mmmaM10/:id', mmmaM10Controller.getMMMA_M10Data);

module.exports = api;//exporta el api