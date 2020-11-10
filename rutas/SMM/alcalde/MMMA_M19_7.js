'use strict'

var express = require('express');//carga express
var mmmaM19_7Controller = require('../../../controllers/smm/mayor/MMMA_M19_7');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM19_7Controller.getAllMaintenenceMMMA_M19_7);
api.post('/mmmaM19_7-save', mmmaM19_7Controller.createMaintenenceMMMA_M19_7);
api.put('/update-mmmaM19_7/:id', mmmaM19_7Controller.editMMMA_M19_7Data);
api.get('/get-history/:id', mmmaM19_7Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM19_7Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM19_7Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM19_7Controller.checkedApprovalByWorker);
api.get('/mmmaM19_7/:id', mmmaM19_7Controller.getMMMA_M19_7Data);

module.exports = api;//exporta el api