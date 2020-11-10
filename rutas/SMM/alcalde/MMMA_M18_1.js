'use strict'

var express = require('express');//carga express
var mmmaM18_1Controller = require('../../../controllers/smm/mayor/MMMA_M18_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM18_1Controller.getAllMaintenenceMMMA_M18_1);
api.post('/mmmaM18_1-save', mmmaM18_1Controller.createMaintenenceMMMA_M18_1);
api.put('/update-mmmaM18_1/:id', mmmaM18_1Controller.editMMMA_M18_1Data);
api.get('/get-history/:id', mmmaM18_1Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM18_1Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM18_1Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM18_1Controller.checkedApprovalByWorker);
api.get('/mmmaM18_1/:id', mmmaM18_1Controller.getMMMA_M18_1Data);

module.exports = api;//exporta el api