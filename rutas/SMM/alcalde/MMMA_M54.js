'use strict'

var express = require('express');//carga express
var mmmaM54Controller = require('../../../controllers/smm/mayor/MMMA_M54');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM54Controller.getAllMaintenenceMMMA_M54);
api.post('/mmmaM54-save', mmmaM54Controller.createMaintenenceMMMA_M54);
api.put('/update-mmmaM54/:id', mmmaM54Controller.editMMMA_M54Data);
api.get('/get-history/:id', mmmaM54Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM54Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM54Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM54Controller.checkedApprovalByWorker);
api.get('/mmmaM54/:id', mmmaM54Controller.getMMMA_M54Data);

module.exports = api;//exporta el api