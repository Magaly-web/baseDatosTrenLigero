'use strict'

var express = require('express');//carga express
var mmmaM21Controller = require('../../../controllers/smm/mayor/MMMA_M21');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM21Controller.getAllMaintenenceMMMA_M21);
api.post('/mmmaM21-save', mmmaM21Controller.createMaintenenceMMMA_M21);
api.put('/update-mmmaM21/:id', mmmaM21Controller.editMMMA_M21Data);
api.get('/get-history/:id', mmmaM21Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM21Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM21Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM21Controller.checkedApprovalByWorker);
api.get('/mmmaM21/:id', mmmaM21Controller.getMMMA_M21Data);

module.exports = api;//exporta el api