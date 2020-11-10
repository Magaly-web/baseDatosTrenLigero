'use strict'

var express = require('express');//carga express
var mmmaM34Controller = require('../../../controllers/smm/mayor/MMMA_M34');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM34Controller.getAllMaintenenceMMMA_M34);
api.post('/mmmaM34-save', mmmaM34Controller.createMaintenenceMMMA_M34);
api.put('/update-mmmaM34/:id', mmmaM34Controller.editMMMA_M34Data);
api.get('/get-history/:id', mmmaM34Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM34Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM34Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM34Controller.checkedApprovalByWorker);
api.get('/mmmaM34/:id', mmmaM34Controller.getMMMA_M34Data);

module.exports = api;//exporta el api