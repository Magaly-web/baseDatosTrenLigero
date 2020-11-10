'use strict'

var express = require('express');//carga express
var mmmaM18_15Controller = require('../../../controllers/smm/mayor/MMMA_M18_15');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM18_15Controller.getAllMaintenenceMMMA_M18_15);
api.post('/mmmaM18_15-save', mmmaM18_15Controller.createMaintenenceMMMA_M18_15);
api.put('/update-mmmaM18_15/:id', mmmaM18_15Controller.editMMMA_M18_15Data);
api.get('/get-history/:id', mmmaM18_15Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM18_15Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM18_15Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM18_15Controller.checkedApprovalByWorker);
api.get('/mmmaM18_15/:id', mmmaM18_15Controller.getMMMA_M18_15Data);

module.exports = api;//exporta el api