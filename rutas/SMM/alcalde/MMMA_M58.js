'use strict'

var express = require('express');//carga express
var mmmaM58Controller = require('../../../controllers/smm/mayor/MMMA_M58');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM58Controller.getAllMaintenenceMMMA_M58);
api.post('/mmmaM58-save', mmmaM58Controller.createMaintenenceMMMA_M58);
api.put('/update-mmmaM58/:id', mmmaM58Controller.editMMMA_M58Data);
api.get('/get-history/:id', mmmaM58Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM58Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM58Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM58Controller.checkedApprovalByWorker);
api.get('/mmmaM58/:id', mmmaM58Controller.getMMMA_M58Data);

module.exports = api;//exporta el api