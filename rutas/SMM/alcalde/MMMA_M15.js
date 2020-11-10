'use strict'

var express = require('express');//carga express
var mmmaM15Controller = require('../../../controllers/smm/mayor/MMMA_M15');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM15Controller.getAllMaintenenceMMMA_M15);
api.post('/mmmaM15-save', mmmaM15Controller.createMaintenenceMMMA_M15);
api.put('/update-mmmaM15/:id', mmmaM15Controller.editMMMA_M15Data);
api.get('/get-history/:id', mmmaM15Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM15Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM15Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM15Controller.checkedApprovalByWorker);
api.get('/mmmaM15/:id', mmmaM15Controller.getMMMA_M15Data);

module.exports = api;//exporta el api