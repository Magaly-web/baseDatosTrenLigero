'use strict'

var express = require('express');//carga express
var mmmaM47Controller = require('../../../controllers/smm/mayor/MMMA_M47');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM47Controller.getAllMaintenenceMMMA_M47);
api.post('/mmmaM47-save', mmmaM47Controller.createMaintenenceMMMA_M47);
api.put('/update-mmmaM47/:id', mmmaM47Controller.editMMMA_M47Data);
api.get('/get-history/:id', mmmaM47Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM47Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM47Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM47Controller.checkedApprovalByWorker);
api.get('/mmmaM47/:id', mmmaM47Controller.getMMMA_M47Data);

module.exports = api;//exporta el api