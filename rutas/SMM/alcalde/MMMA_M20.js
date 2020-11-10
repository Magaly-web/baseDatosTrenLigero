'use strict'

var express = require('express');//carga express
var mmmaM20Controller = require('../../../controllers/smm/mayor/MMMA_M20');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM20Controller.getAllMaintenenceMMMA_M20);
api.post('/mmmaM20-save', mmmaM20Controller.createMaintenenceMMMA_M20);
api.put('/update-mmmaM20/:id', mmmaM20Controller.editMMMA_M20Data);
api.get('/get-history/:id', mmmaM20Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM20Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM20Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM20Controller.checkedApprovalByWorker);
api.get('/mmmaM20/:id', mmmaM20Controller.getMMMA_M20Data);

module.exports = api;//exporta el api