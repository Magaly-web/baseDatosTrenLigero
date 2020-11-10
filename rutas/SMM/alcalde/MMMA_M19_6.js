'use strict'

var express = require('express');//carga express
var mmmaM19_6Controller = require('../../../controllers/smm/mayor/MMMA_M19_6');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM19_6Controller.getAllMaintenenceMMMA_M19_6);
api.post('/mmmaM19_6-save', mmmaM19_6Controller.createMaintenenceMMMA_M19_6);
api.put('/update-mmmaM19_6/:id', mmmaM19_6Controller.editMMMA_M19_6Data);
api.get('/get-history/:id', mmmaM19_6Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM19_6Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM19_6Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM19_6Controller.checkedApprovalByWorker);
api.get('/mmmaM19_6/:id', mmmaM19_6Controller.getMMMA_M19_6Data);

module.exports = api;//exporta el api