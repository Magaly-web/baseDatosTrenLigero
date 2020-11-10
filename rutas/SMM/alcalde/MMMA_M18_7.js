'use strict'

var express = require('express');//carga express
var mmmaM18_7Controller = require('../../../controllers/smm/mayor/MMMA_M18_7');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM18_7Controller.getAllMaintenenceMMMA_M18_7);
api.post('/mmmaM18_7-save', mmmaM18_7Controller.createMaintenenceMMMA_M18_7);
api.put('/update-mmmaM18_7/:id', mmmaM18_7Controller.editMMMA_M18_7Data);
api.get('/get-history/:id', mmmaM18_7Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM18_7Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM18_7Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM18_7Controller.checkedApprovalByWorker);
api.get('/mmmaM18_7/:id', mmmaM18_7Controller.getMMMA_M18_7Data);

module.exports = api;//exporta el api