'use strict'

var express = require('express');//carga express
var mmmaM18_13Controller = require('../../../controllers/smm/mayor/MMMA_M18_13');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM18_13Controller.getAllMaintenenceMMMA_M18_13);
api.post('/mmmaM18_13-save', mmmaM18_13Controller.createMaintenenceMMMA_M18_13);
api.put('/update-mmmaM18_13/:id', mmmaM18_13Controller.editMMMA_M18_13Data);
api.get('/get-history/:id', mmmaM18_13Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM18_13Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM18_13Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM18_13Controller.checkedApprovalByWorker);
api.get('/mmmaM18_13/:id', mmmaM18_13Controller.getMMMA_M18_13Data);

module.exports = api;//exporta el api