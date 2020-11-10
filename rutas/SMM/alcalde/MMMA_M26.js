'use strict'

var express = require('express');//carga express
var mmmaM26Controller = require('../../../controllers/smm/mayor/MMMA_M26');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM26Controller.getAllMaintenenceMMMA_M26);
api.post('/mmmaM26-save', mmmaM26Controller.createMaintenenceMMMA_M26);
api.put('/update-mmmaM26/:id', mmmaM26Controller.editMMMA_M26Data);
api.get('/get-history/:id', mmmaM26Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM26Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM26Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM26Controller.checkedApprovalByWorker);
api.get('/mmmaM26/:id', mmmaM26Controller.getMMMA_M26Data);

module.exports = api;//exporta el api