'use strict'

var express = require('express');//carga express
var mmmaM19_4Controller = require('../../../controllers/smm/mayor/MMMA_M19_4');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM19_4Controller.getAllMaintenenceMMMA_M19_4);
api.post('/mmmaM19_4-save', mmmaM19_4Controller.createMaintenenceMMMA_M19_4);
api.put('/update-mmmaM19_4/:id', mmmaM19_4Controller.editMMMA_M19_4Data);
api.get('/get-history/:id', mmmaM19_4Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM19_4Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM19_4Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM19_4Controller.checkedApprovalByWorker);
api.get('/mmmaM19_4/:id', mmmaM19_4Controller.getMMMA_M19_4Data);

module.exports = api;//exporta el api