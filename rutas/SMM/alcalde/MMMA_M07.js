'use strict'

var express = require('express');//carga express
var mmmaM07Controller = require('../../../controllers/smm/mayor/MMMA_M07');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM07Controller.getAllMaintenenceMMMA_M07);
api.post('/mmmaM07-save', mmmaM07Controller.createMaintenenceMMMA_M07);
api.put('/update-mmmaM07/:id', mmmaM07Controller.editMMMA_M07Data);
api.get('/get-history/:id', mmmaM07Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM07Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM07Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM07Controller.checkedApprovalByWorker);
api.get('/mmmaM07/:id', mmmaM07Controller.getMMMA_M07Data);

module.exports = api;//exporta el api