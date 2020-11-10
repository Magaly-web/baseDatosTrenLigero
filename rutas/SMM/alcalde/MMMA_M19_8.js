'use strict'

var express = require('express');//carga express
var mmmaM19_8Controller = require('../../../controllers/smm/mayor/MMMA_M19_8');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM19_8Controller.getAllMaintenenceMMMA_M19_8);
api.post('/mmmaM19_8-save', mmmaM19_8Controller.createMaintenenceMMMA_M19_8);
api.put('/update-mmmaM19_8/:id', mmmaM19_8Controller.editMMMA_M19_8Data);
api.get('/get-history/:id', mmmaM19_8Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM19_8Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM19_8Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM19_8Controller.checkedApprovalByWorker);
api.get('/mmmaM19_8/:id', mmmaM19_8Controller.getMMMA_M19_8Data);

module.exports = api;//exporta el api