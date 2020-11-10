'use strict'

var express = require('express');//carga express
var mmmaM18_10Controller = require('../../../controllers/smm/mayor/MMMA_M18_10');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM18_10Controller.getAllMaintenenceMMMA_M18_10);
api.post('/mmmaM18_10-save', mmmaM18_10Controller.createMaintenenceMMMA_M18_10);
api.put('/update-mmmaM18_10/:id', mmmaM18_10Controller.editMMMA_M18_10Data);
api.get('/get-history/:id', mmmaM18_10Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM18_10Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM18_10Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM18_10Controller.checkedApprovalByWorker);
api.get('/mmmaM18_10/:id', mmmaM18_10Controller.getMMMA_M18_10Data);

module.exports = api;//exporta el api