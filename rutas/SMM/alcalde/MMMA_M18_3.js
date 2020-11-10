'use strict'

var express = require('express');//carga express
var mmmaM18_3Controller = require('../../../controllers/smm/mayor/MMMA_M18_3');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM18_3Controller.getAllMaintenenceMMMA_M18_3);
api.post('/mmmaM18_3-save', mmmaM18_3Controller.createMaintenenceMMMA_M18_3);
api.put('/update-mmmaM18_3/:id', mmmaM18_3Controller.editMMMA_M18_3Data);
api.get('/get-history/:id', mmmaM18_3Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM18_3Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM18_3Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM18_3Controller.checkedApprovalByWorker);
api.get('/mmmaM18_3/:id', mmmaM18_3Controller.getMMMA_M18_3Data);

module.exports = api;//exporta el api