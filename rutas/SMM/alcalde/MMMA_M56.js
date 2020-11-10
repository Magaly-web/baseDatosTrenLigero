'use strict'

var express = require('express');//carga express
var mmmaM56Controller = require('../../../controllers/smm/mayor/MMMA_M56');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM56Controller.getAllMaintenenceMMMA_M56);
api.post('/mmmaM56-save', mmmaM56Controller.createMaintenenceMMMA_M56);
api.put('/update-mmmaM56/:id', mmmaM56Controller.editMMMA_M56Data);
api.get('/get-history/:id', mmmaM56Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM56Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM56Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM56Controller.checkedApprovalByWorker);
api.get('/mmmaM56/:id', mmmaM56Controller.getMMMA_M56Data);

module.exports = api;//exporta el api