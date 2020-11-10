'use strict'

var express = require('express');//carga express
var mmmaM18_12Controller = require('../../../controllers/smm/mayor/MMMA_M18_12');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM18_12Controller.getAllMaintenenceMMMA_M18_12);
api.post('/mmmaM18_12-save', mmmaM18_12Controller.createMaintenenceMMMA_M18_12);
api.put('/update-mmmaM18_12/:id', mmmaM18_12Controller.editMMMA_M18_12Data);
api.get('/get-history/:id', mmmaM18_12Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM18_12Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM18_12Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM18_12Controller.checkedApprovalByWorker);
api.get('/mmmaM18_12/:id', mmmaM18_12Controller.getMMMA_M18_12Data);

module.exports = api;//exporta el api