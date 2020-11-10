'use strict'

var express = require('express');//carga express
var mmmaM30Controller = require('../../../controllers/smm/mayor/MMMA_M30');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM30Controller.getAllMaintenenceMMMA_M30);
api.post('/mmmaM30-save', mmmaM30Controller.createMaintenenceMMMA_M30);
api.put('/update-mmmaM30/:id', mmmaM30Controller.editMMMA_M30Data);
api.get('/get-history/:id', mmmaM30Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM30Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM30Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM30Controller.checkedApprovalByWorker);
api.get('/mmmaM30/:id', mmmaM30Controller.getMMMA_M30Data);

module.exports = api;//exporta el api