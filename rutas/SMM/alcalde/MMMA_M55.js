'use strict'

var express = require('express');//carga express
var mmmaM55Controller = require('../../../controllers/smm/mayor/MMMA_M55');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM55Controller.getAllMaintenenceMMMA_M55);
api.post('/mmmaM55-save', mmmaM55Controller.createMaintenenceMMMA_M55);
api.put('/update-mmmaM55/:id', mmmaM55Controller.editMMMA_M55Data);
api.get('/get-history/:id', mmmaM55Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM55Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM55Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM55Controller.checkedApprovalByWorker);
api.get('/mmmaM55/:id', mmmaM55Controller.getMMMA_M55Data);

module.exports = api;//exporta el api