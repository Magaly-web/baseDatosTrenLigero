'use strict'

var express = require('express');//carga express
var mmmaM23Controller = require('../../../controllers/smm/mayor/MMMA_M23');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM23Controller.getAllMaintenenceMMMA_M23);
api.post('/mmmaM23-save', mmmaM23Controller.createMaintenenceMMMA_M23);
api.put('/update-mmmaM23/:id', mmmaM23Controller.editMMMA_M23Data);
api.get('/get-history/:id', mmmaM23Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM23Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM23Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM23Controller.checkedApprovalByWorker);
api.get('/mmmaM23/:id', mmmaM23Controller.getMMMA_M23Data);

module.exports = api;//exporta el api